const button = document.getElementById('submit');
const input = document.getElementById('inp');
const resultdiv = document.getElementById('result')

button.addEventListener('click', (event) => {
    event.preventDefault();
    b64result = btoa(inp.value)
    resultdiv.textContent = "caarfken.github.io/shorten.html?l=" + b64result
});