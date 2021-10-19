let numero = document.getElementById('numero');
let res = document.getElementById('res');
let boton = document.getElementById('boton');
let tooltip = document.getElementById('tooltip');

tooltip.style.position="absolute";
//tooltip.style.top="10vh";
//tooltip.style.left="12vw";
tooltip.style.display="none";

boton.addEventListener('click', ()=>{
    res.value = numero.value*numero.value;
})
boton.addEventListener('mouseover', ()=>{
    tooltip.style.top=boton.offsetTop;
    tooltip.style.left=boton.offsetLeft; 
    tooltip.innerText="Al pulsarlo se calculará el cuadrado del nº introducido";
    tooltip.style.display="block";
})

boton.addEventListener('mouseout', ()=>{
    tooltip.style.display="none";
})

numero.addEventListener('mouseover', ()=>{
    tooltip.style.top=numero.offsetTop;
    tooltip.style.left=numero.offsetLeft;
    tooltip.innerText="Introduzca el nº cuyo cuadrado quiera calcular";
    tooltip.style.display="block";
})

numero.addEventListener('mouseout', ()=>{
    tooltip.style.display="none";
})