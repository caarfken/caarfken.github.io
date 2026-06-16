const link = document.getElementById('link');
const urlParams = new URLSearchParams(window.location.search);
const l = urlParams.get('l');

lengthened = atob(l)
if (!lengthened.startsWith("http://") && !lengthened.startsWith("https://")) {
    lengthened = "http://" + lengthened
}
else
{
    link.href = lengthened
}