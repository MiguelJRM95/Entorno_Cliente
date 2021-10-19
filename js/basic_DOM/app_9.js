let normal = document.getElementById('normal');
let pass = document.getElementById('pass');

normal.addEventListener('keyup', ()=>{
    console.log(pass.value);
    pass.value=normal.value;
})