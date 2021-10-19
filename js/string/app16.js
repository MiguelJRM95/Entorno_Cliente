let bef = document.getElementById('longitudBef');
let cadena = document.getElementById('cadena');
let aft = document.getElementById('longitudAft');

let text = window.prompt("Introduce cadena:");

bef.innerText = `El tamaño de la cadena antes es: ${text.length}`;

cadena.innerText = text;

aft.innerText = `El tamaño de la cadena despues es: ${text.trim().split(' ').join(' ').length}`;