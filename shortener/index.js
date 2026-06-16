const button = document.getElementById('submit');
const input = document.getElementById('inp');
const resultdiv = document.getElementById('result')

button.addEventListener('click', (event) => {
    event.preventDefault();

    const value = input.value.trim();
    const normalized = /^(https?:\/\/)/i.test(value)
        ? value
        : `http://${value}`;
                             // Batshit insane regexes
    const b64result = btoa(normalized);
    resultdiv.textContent = `caarfken.github.io/shortener/shorten.html?l=${b64result}`;
});