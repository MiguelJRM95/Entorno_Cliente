let dni = document.getElementById('dni');
let result = document.getElementById('result');
let button = document.getElementById('button');

const letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];

const checkNumber = (x) => {
    for (let i = 0; i < Array.from(x).length; i++) {
        if(isNaN(Array.from(x)[i])){
            return false;
        }
    }
    return true;
}
button.addEventListener('click', ()=>{
    if(!(dni.value.length === 8)){
        window.alert("El DNI Ha de contener 8 numeros");
    }else{
        if(checkNumber(dni.value)){
            let number = (dni.value)%23;
            result.innerText = `${dni.value}${letras[number]}`;
        }else{
            window.alert("Solo han de introducirse números");
        }
    } 
})
