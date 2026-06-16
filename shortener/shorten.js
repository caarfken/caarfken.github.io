const link = document.getElementById('link');
const urlParams = new URLSearchParams(window.location.search);
const l = urlParams.get('l');

lengthened = atob(l)
{
    link.href = lengthened
}