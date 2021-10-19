function cargarArray(...args){
    let edades= new Array();
    args.forEach(a => {
        if(edades.length === 10){
            return;
        }
        if(typeof(a)==="number"){
            edades.push(a);
        }
    });
    return edades;
}

function mediaEdad(arrayEdad){
    let sum = 0;
    arrayEdad.forEach(e =>{
        sum+=e;
    })
    return (sum/arrayEdad.length);
}

function mayoresEdad(arrayEdad){
    let mayorEdad = new Array();
    arrayEdad.forEach(e => {
        if(e>=18){
            mayorEdad.push(e);
        }
    })
    return mayorEdad.length;
}

console.log(cargarArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11))
console.log(mediaEdad(cargarArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)))
console.log(mayoresEdad(cargarArray(1, 2, 3, 18, 5, 6, 7, 8, 9, 10, 11)))

function mostrarImpares(n1, n2){
    let numImp = new Array();
    if(n1>n2){
        for (let i = n2; i < n1; i++) {
            if(i%2!=0)
                numImp.push(i);
        }
    }else{
        for (let i = n1; i < n2; i++) {
            if(i%2!=0)
                numImp.push(i);
        }
    }
    return numImp;
}

console.log(mostrarImpares(3, 30));

function calculaMedias(arrayNum){
    let medias = new Set();
    let totPos = 0;
    let sumPos = 0;
    let totNeg = 0;
    let sumNeg = 0;
    arrayNum.forEach(e => {
        if(e>0){
            totPos++;
            sumPos+=e;
        }else if(e<0){
            totNeg++;
            sumNeg+=e;
        }
    })
    medias = {
        "Media Positivos": sumPos/totPos,
        "Media Negativos": sumNeg/totNeg
    }
    return medias;
}

function calculaMayMen(arrayNum){
    let mayMen = new Set();
    var numM;
    var numm;
    arrayNum.forEach(n => {
        if(numM == null)
            numM = n;
        if(n>numM)
            numM = n;
    })

    arrayNum.forEach(n => {
        if(numm == null)
            numm = n;
        if(n<numm)
            numm = n;
    })
    mayMen = {
        "Numero Mayor" : numM,
        "Numero Menor" : numm
    }

    return mayMen;
}

console.log(calculaMedias(cargarArray(1, 2, -3, 4, 5, 6, 7, -8, 9, 10, 11)))
console.log(calculaMayMen(cargarArray(1, 2, -3, 4, 5, 6, 7, -8, 9, 10, 11)))