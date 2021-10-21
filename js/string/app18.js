let cadena = document.getElementById('cadena');
let button = document.getElementById('button');
button.addEventListener('click', ()=>{
    Array.from(cadena.value).forEach((l,index)=>{
        if(isNaN(l)){
            window.alert(`Error en la posicion ${index}`);
        }
    })
})
