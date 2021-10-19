var edad = document.getElementById("edad");
var abono = document.getElementById("text")
var valorEdad = null;

edad.addEventListener("focusout", ()=>{
    valorEdad = edad.value;
    abono.innerText = bono(valorEdad);
})

function bono(edad){
    let msg = "";
    switch (true) {
        case (edad <= 18):
            msg = "Abono Joven";
            break;
        case (edad > 18 && edad < 65):
            msg = "Abono normal";
            break;
        case (edad >= 65):
            msg = "Abono 3ª edad";
            break;
        default:
            msg = "no entre";
            break;
    }

    return msg;
}
