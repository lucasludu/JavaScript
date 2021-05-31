// Crear un elemento

/*
document.write('<h1>Titulo desde JS</h1>');

alert(document.getElementById('titulo1')); // Aparece un cartel de alerta de que es un objeto de HTML.
alert(document.getElementById('titulo1').innerText); // Con inner text aparece el nombre del id;
alert(document.getElementById('titulo1').innerHTML); // Aparece lo mismo del anterior.
*/

/* La diferencia que si tengo un parrafo dentro del titulo. 
   Con inner Text puedo mostrar el parrafo
   Con inner HTML me muestra con la etiqueta <p></p>
*/

/*
const objetoH1 = document.getElementById('titulo1');

document.write(objetoH1.innerHTML);
document.write('<br>');
document.write(objetoH1.innerText);

const objetoH2 = document.getElementsByClassName('subtitulo');
console.log(objetoH2);

document.write('<br>');
document.write(objetoH2[0].innerHTML);
document.write('<br>');
document.write(objetoH2[0].innerText);

const objetoButton = document.getElementsByTagName('Button');

document.write('<br><br>');
document.write(objetoButton[0].innerHTML); // Cambiar elemento html
document.write('<br>');
document.write(objetoButton[0].innerText); // Cambiar texto

document.write('<br><br>');
let numero = 5;
console.log(numero);

objetoH1.innerText = 'Cambiando el titulo desde JS';
objetoH1.innerHTML = '<h5>Cambiando el titulo desde JS con H5</h5>';
*/

/*
// El QS se parece a JQuery
// # id, .clase, tag literal del elemento
const objetoH1 = document.querySelector('.subtitulo');
const objetoH1 = document.querySelector('Button');
const objetoH1 = document.querySelector('#titulo1');
*/

//objetoH1.innerHTML += '<h4>Titulo desde JS con Query Selector</h4>';
//objetoH1.style.background = 'blue';
//document.body.style.background = 'cyan';

/*
const obj = {
    titulo : 'Titulo desde JS',
    subtitulo : 'Sub-Titulo desde JS'
};

objetoH1.innerHTML = '<h1>' + obj.titulo + '</h1><h2>' + obj.subtitulo + '</h2>'; 
*/

/*
const objetoH1 = document.querySelector('#titulo1');
let nombres = ['Carlitos', 'Fernando', 'Daiana'];
objetoH1.innerHTML = nombres + '<br>';
// Se muestra el arreglo de forma ordenada (reversado y no)
nombres.sort().reverse();
objetoH1.innerHTML += nombres + '<br>';
nombres.sort();
objetoH1.innerHTML += nombres + '<br>';

nombres.push('Mariana'); // Agrega al final
objetoH1.innerHTML += nombres + '<br>';
nombres.push('Analia', 'Daniela');
objetoH1.innerHTML += nombres + '<br>';

nombres.pop(); // Elimina el que esta al final
objetoH1.innerHTML += nombres + '<br>';

nombres.unshift('Lautaro'); // Agrega al inicio
objetoH1.innerHTML += nombres + '<br>';

nombres.shift(); // Elimina el que esta al inicio
objetoH1.innerHTML += nombres + '<br>';
*/

/*
nombres.splice(1); // Elimina todo menos el primero
objetoH1.innerHTML += nombres + '<br>';

nombres.splice(1, 1); // A partir del primer elimina el que le sigue
objetoH1.innerHTML += nombres + '<br>';

nombres.splice(1, 2); // A partir del primero elimina los siguientes dos
objetoH1.innerHTML += nombres + '<br>';
*/

/*
nombres.splice(1, 2, 'Pedro'); // A partir del primero elimino los dos siguientes y agrego a Pedro
objetoH1.innerHTML += nombres + '<br>';

const arreglo = [
    {
        nombre : "Julian",
        apellido : 'Vera',
        edad : 37
    },

    {
        nombre : "Clari",
        apellido : "Ortega",
        edad : 30
    }
];

for (const propiedad in arreglo) {
    nombres.push(arreglo[propiedad].nombre);
    console.log(arreglo[propiedad].nombre);
}

objetoH1.innerHTML += nombres + '<br>';

// Cambio el nombre del subtitulo por los 3 nombres del arreglo
document.querySelector('.subtitulo').innerHTML = nombres.slice(2, 4); 
*/

// FUNCIONES
/*
let contador = 1;
const objBoton = document.querySelector('#boton1');
objBoton.onclick = alerta('Boton Nro 1');

function alerta(nombreBoton) {
    alert('Alerta el ' + nombreBoton + ' desde Funcion' + contador++);
}

document.querySelector('#boton2').onclick = alerta('Boton Nro 2');

console.log(contador);
*/

/*
function sumar () {
    contador++;
    console.log(contador);
    return contador;
}

sumar();
sumar();
sumar();

let suma1 = sumar();
*/
 
function sumar (a,b) {
    console.log(a + b);
    return a+b;
}

let numero;