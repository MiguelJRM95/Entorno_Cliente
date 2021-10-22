function todaysdate(){
    let newDate = new Date();
    let date = document.createElement('p');
    date.innerText = `La fecha de hoy es ${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`;
    document.body.appendChild(date);
}

function displayTime(){
    let newHour = new Date();
    let hour = document.createElement('p');
    hour.innerText = `La hora exacta es ${newHour.getHours()}:${newHour.getMinutes()}:${newHour.getSeconds()}`;
    document.body.appendChild(hour);
}

function datePhrase(){
    let newDate = new Date();
    let date = document.createElement('p');
    date.innerText = `Hoy es un ${newDate.toLocaleString('es-Es', {weekday:'long'})} estupendo del mes de ${newDate.toLocaleString('es-Es', {month:'long'})}`;
    document.body.appendChild(date);
}

function toMonthsAgo(dateIn){
    let newMonth = dateIn.getMonth()-2;
    let newDate = new Date(dateIn.setUTCMonth(newMonth));
    let date = document.createElement('p');
    date.innerText = `Hace 2 meses era ${newDate.toLocaleString('es-Es', {weekday:'long'})} ${newDate.getDate()} de ${newDate.toLocaleString('es-Es', {month:'long'})}`;
    document.body.appendChild(date);
}

function fifteenDaysIn(dateIn){
    let daysIn = dateIn.getDate()+ 15;
    let newDate = new Date(dateIn.setUTCDate(daysIn));
    let date = document.createElement('p');
    date.innerText = `Dentro de 15 dias será ${newDate.toLocaleString('es-Es', {weekday:'long'})} ${newDate.getDate()} de ${newDate.toLocaleString('es-Es', {month:'long'})}`;
    document.body.appendChild(date);
}

todaysdate();
displayTime();
let currentDate = document.getElementById('currentTime');
setInterval(()=>{
    let newHour = new Date();
    currentDate.innerText = `La hora exacta es ${newHour.getHours()}:${newHour.getMinutes()}:${newHour.getSeconds()}`;
}, 1000);
datePhrase();
toMonthsAgo(new Date());
fifteenDaysIn(new Date());