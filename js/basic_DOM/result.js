function multiplos() {
    for (let i = 1; i <= 60; i++) {
        console.log(i * 5);
    }
}

function tabla3() {
    for (let i = 1; i <= 10; i++) {
        let result = 3 * i;
        console.log(`3*${i} = ${result}`)
    }
}

function compareNum(a, b, c) {
    let numMay;
    if (a > b) {
        numMay = a;
    } else if (a > c) {
        numMay = a;
    } else if (b > c) {
        numMay = b;
    } else {
        numMay = c;
    }
    return numMay;
}

function oddEven(a, b, c, d, e) {
    let odd = [];
    let even = [];
    let numArr = [a, b, c, d, e];
    let oddEven = (odd, even);
    numArr.forEach(e => {
        if (e % 2 != 0) {
            odd.push(e);
        } else {
            even.push(e);
        }
    });
    console.log(`Los pares son ${even} y los impares ${odd}`);
}

function grades(...notes) {
    let sob = 0;
    let not = 0;
    let aprob = 0;
    let sus = 0;
    notes.forEach(n => {
        switch (n) {
            case 9, 10:
                if (n >= 9) sob++;
                break;
            case 7, 8:
                if (n >= 7 || n <= 8) not++;
                break;
            case 5, 6:
                if (n >= 5 || n <= 6) aprob++;
                break;
            case 4:
                if (n < 5) sus++;
                break;
            default:
                if (n < 5) sus++;
                break;
        }
    })

    console.log(sob + " " + not + " " + aprob + " " + sus);
}

function orderingNum(a, b, c) {
    let numArray = [a, b, c];
    console.log(numArray.sort());
}


function promedio(a, b, c) {
    console.log((a + b + c) / 3);
}

function joinString(Strings) {
    var finalString = "";
    for (let i = 0; i < Array.from(Strings).length; i++) {
        if(Array.from(Strings)[i] === "cancelar"){
            break;
        }
        finalString+= `-${Array.from(Strings)[i]}`;
    }
    if(finalString.charAt(0) === "-"){
        finalString = finalString.slice(1);
    }
    console.log(finalString);
}
