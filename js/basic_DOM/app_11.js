let color = document.getElementById('color');


color.addEventListener('focusout', ()=> {
    document.body.style.backgroundColor = color.value;
})