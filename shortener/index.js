const button = document.getElementById('submit');
const input = document.getElementById('inp');
const result = document.getElementById('result')

button.addEventListener('click', (event) => {
    event.preventDefault();

    const value = input.value.trim();
    const normalized = /^(https?:\/\/)/i.test(value)
        ? value
        : `http://${value}`;
                             // Batshit insane regexes
    const b64result = btoa(normalized);
	result.style.visibility = "visible";
    result.href = `http://caarfken.github.io/shortener/shorten.html?l=${b64result}`;
	result.textContent = `caarfken.github.io/shortener/shorten.html?l=${b64result}`;
});