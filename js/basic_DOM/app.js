var title = document.querySelector("#cabecera");
var info = document.getElementById("parrafo");
var boton = document.querySelector("#boton");
var link = document.getElementById("link");

boton.addEventListener("click", () => {
    title.innerHTML = "Boton Pulsado";
})

link.addEventListener("click", ()=> {
    info.append(" y esto es mas informacion");
})

console.log(boton);