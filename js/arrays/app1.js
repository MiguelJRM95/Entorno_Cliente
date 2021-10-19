var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let div = document.querySelector('div');

let n1 = () => {
    return document.getElementById('n1').value;
};

let n2 = () => {
    return document.getElementById('n2').value;
};

let mes = () => {
    let mesSeparado = [];
    meses.forEach((m) => {
        mesSeparado.push((m.split('')).reverse());
    })
    return mesSeparado.sort();
}


function toStringMe(){
    div.innerText = meses.toString();
}

function toReverse(){
    div.innerText = meses.reverse();
}

function toSlice(){
    div.innerText = meses.slice(n1()-1,n2());
}

function toPop(){
    div.innerText = meses.shift();
}

function orderAs(){
    div.innerText = meses.sort();
}

function orderDes(){
    div.innerText = meses.sort().reverse();
}

function customOrder(){
    let mesesOrdenador = [];
    mes().forEach((m) => {
        mesesOrdenador.push((m.reverse().join('')));
    })
    div.innerText = mesesOrdenador.toString();
}