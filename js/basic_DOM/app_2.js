var boton = document.getElementById("boton");

var autor = document.getElementById("autor");

var caja2 = document.getElementById("caja2");

var p = document.getElementById("parrafo")

window.addEventListener("load", () =>{
    alert("Bienvenido");
})

boton.addEventListener("click", () =>{
    autor.placeholder = "Miguel";
})

autor.addEventListener("focus", () =>{
    p.innerText = "Focus es caja uno"
})

caja2.addEventListener("focus", () =>{
    p.innerText = "Focus es caja dos"
})