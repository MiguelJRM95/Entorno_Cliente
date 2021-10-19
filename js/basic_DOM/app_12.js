let pass = prompt("Escribe contraseña");

while(pass != "DW2A" && pass != null){
    pass = prompt("Contraseña incorrecta, escribe contraseña de nuevo");

}
if(pass==null){
    document.getElementById('pass').innerHTML = "Campo pass no rellenado"
}else{
    document.location.href="https://elpais.com";
}


