let table = document.getElementById('table');

let bgColor= prompt("Elige color de la tabla(R-A-Y-V)", "coral");

let textColor = prompt("Elige color del texto(R-A-Y-V)", "white");

switch (bgColor.toUpperCase()) {
    case "R":
        table.style.backgroundColor = "Hotpink";
        break;
    case "A":
        table.style.backgroundColor = "Lightblue";
        break;
    case "Y":
        table.style.backgroundColor = "Lightyellow";
        break;
    case "V":
        table.style.backgroundColor = "Lightgreen";
        break;
    default:
        table.style.backgroundColor = bgColor.toLowerCase();
        break;
}

switch (textColor.toUpperCase()) {
    case "R":
        table.style.color = "red";
        break;
    case "A":
        table.style.color = "blue";
        break;
    case "Y":
        table.style.color = "yellow";
        break;
    case "V":
        table.style.color = "green";
        break;
    default:
        table.style.color = textColor.toLowerCase();
        break;
}

document.body.appendChild(document.createElement('div')).innerHTML = `Color fondo tabla ${table.style.backgroundColor}`

document.body.appendChild(document.createElement('div')).innerHTML = `Color texto ${table.style.color}`
