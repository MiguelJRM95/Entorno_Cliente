// Ex. 1 and 3

function cargarArrayNumAl(){
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random()*(1000 + 1)))
    }
    return array;
}

function cargarArrayInd(...args){
    let array = [];
    args.forEach((a) => {
        array.push(a);
    })
    return array;
}

function generarArrayDesdeElMenor(array){
   let posicion = array.indexOf(Math.max(...array));
   return array.slice(posicion);
}

function buscarArray(elemento, array){
    let posicion = 0;
    array.forEach((e) => {
        if(elemento === e){
            posicion = array.indexOf(e);
        }
    })
    return posicion;
}

// Ex 4
function printArray(){
    let array = [];
    for (let i = 0; i < 11; i++) {
        array.push(Math.floor(Math.random()*(9 + 1)))
    }
    let table = document.createElement('table');
    for (let i = 0; i < 11; i+=4) { 
        if(i=>4 && i%4===0) {
            table.innerHTML+=`
            <tr>
                <td>${array[i]}</td>
                <td>${array[i]}</td>
                <td>${array[i+1]}</td>
                <td>${array[i+2]}</td>
            </tr>
            `;
        }
    }
    document.body.appendChild(table);
}

printArray();


//Ex.5
function impKeyValue(array){
    for (let i = 0; i < array.length; i++) {
        let p = document.createElement('p');
        p.innerHTML = `
            pos ${i} -> ${array[i]}
            <br>
        `
        document.body.append(p);
    }
}

impKeyValue(cargarArrayNumAl());


//Ex. 6
let miData = document.getElementById('data');
let pares = document.getElementById('pares');
let checkPares = document.getElementById('checkPares')
let input = null;

function parseData(data){
    let array = data.split(',');
    let arrayNum = [];
    array.forEach((a) => {
        parseInt(a.trim());
        console.log(a.trim())
        if (!isNaN(a.trim())) {
            arrayNum.push(a);
        }
    })
    return arrayNum;
}

function mostrarPares(data){
    const pares = data.filter(d => d%2===0 );
    return pares;
}

function isPares(data){
    const isPares = data.some(d => d%2===0);
    return isPares;
}

miData.addEventListener('click', () => {
    if(input !== null){
        document.body.removeChild(input);
    }
    
    input = document.createElement('input');
    input.type = "text";
    miData.after(document.createElement('br'));
    document.body.insertBefore(input, pares);
    pares.before(document.createElement('br'));
})

pares.addEventListener('click', ()=>{
    if(input === null){
        alert("No has introducido numeros");
    }
    let result = mostrarPares(parseData(input.value));
    input.value = result;
})

checkPares.addEventListener('click', ()=>{
    if(input === null){
        alert("No has introducido numeros");
    }
    let result = isPares(parseData(input.value));
    input.value = result;
})

console.log(mostrarPares(parseData("1, melon, 4, 5, 6")));
console.log(isPares(parseData("1, melon, 3, 5, 7")));