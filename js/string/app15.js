let inf = document.getElementById('inf');
let sup = document.getElementById('sup');
let button = document.getElementById('calcular');

const number = (n1, n2) => {
    let numbers = [];
    for (let i = n1; i <= n2; i++) {
        numbers.push(parseInt(i));
    }
    return numbers;
}
const impares = (array) => {
    let impares = [];
    array.forEach((n) => {
        if(n%2!=0){
            impares.push(n);
        }
    })
    return impares;
}


button.addEventListener('click', ()=>{
    let myArr= number(inf.value, sup.value);
    let imparesArr = impares(myArr);
    window.alert(`Los impares son: ${imparesArr.toString()}`)
})

