const button = document.getElementById('submit');
const input = document.getElementById('inp');
const resultdiv = document.getElementById('result')

button.addEventListener('click', (event) => {
    event.preventDefault();
    if (inp.value.contains("http") == false)
    {
        inp.value = "http://" + inp.value
    }
    b64result = btoa(inp.value)
    resultdiv.textContent = "caarfken.github.io/shortener/shorten.html?l=" + b64result
});