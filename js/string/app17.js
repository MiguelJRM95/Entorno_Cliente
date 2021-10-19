let txt = "viento con en cien popa cañones a por toda banda vela";
let oddPrhase = null;
let evenPrhase = null;
function orderString(string){
    let odd = [];
    let even = [];
    let words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
        if(i%2==0){
            even.push(words[i]);
        }
        if(i%2!=0){
            odd.push(words[i]);
        }
    }
    let order = document.createElement('div');
    order.innerHTML=`Primera:
    <p id="odd">${odd.join(' ')}</p>
    <p id="even">${even.join(' ')}</p>`;
    document.body.appendChild(order);
}

function capitalizeStrings(string){
    let capitalice = document.createElement('div');
    capitalice.innerHTML = `Segunda: <br>`;
    string.split(' ').forEach((w) => {
        capitalice.innerHTML += `${w.charAt(0).toUpperCase()}${w.slice(1)} `;
    })
    capitalice.innerHTML += `<br>${string.charAt(0).toUpperCase()}${string.slice(1)}
    <br>
    La Longitud de la cadena es ${string.length} caracteres
    <br>
    El numero de palabras de la frase es ${string.split(' ').length}
    `;
    document.body.appendChild(capitalice);
}

function printWords(string){
    let printer = document.createElement('div');
    string.split(' ').map((w, index) => {
        printer.innerHTML += `${index+1}.${w}<br>`;
    })
    document.body.appendChild(printer);
}

function capitaliceAll(string){
    let capitalicerPrint = document.createElement('div');
    capitalicerPrint.innerHTML = `<br>Quinta: 
    <br>
    `;
    Array.from(string).forEach((w)=>{
        capitalicerPrint.innerHTML += `${w.toUpperCase()}`;
    })
    document.body.appendChild(capitalicerPrint);
}

function searchByWord(word, string){
    let searcherPrint = document.createElement('div');
    searcherPrint.innerHTML = `<br>Sexta: 
    <br>
    `;
    searcherPrint.innerHTML += `Posicion palabra '${word}': ${string.indexOf(word)}`
    document.body.appendChild(searcherPrint);
}

orderString(txt);
oddPrhase = document.getElementById('odd');
evenPrhase = document.getElementById('even');
capitalizeStrings(oddPrhase.innerText);
document.writeln('<br>Tercera: ');
printWords(oddPrhase.innerText)
document.writeln('<br>Cuarta: ');
printWords(evenPrhase.innerText);
capitaliceAll(evenPrhase.innerText);
searchByWord('cañones', txt);
