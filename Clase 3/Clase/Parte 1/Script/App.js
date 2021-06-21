/***********************
var a;
var b;

a = 5;
b = "8";

function suma() {
    total = a + b;
    console.log(total);
    return total;
}

function resta(a, b) {
    total = a - b;
    return total;
}
********************************/


/**************************************************
var button = document.querySelector('#boton');

button.onclick = resultado; 

function resultado() {
    document.querySelector('#resultado').innerHTML = 'Escribi desde Js';
}
**********************************************/

var button = document.querySelector('#boton');
//boton.onclick = generarRandom;
boton.onclick = cambiarBody;

/**********************************************************
function generarRandom() {
    // Del 0 al 1
    // document.querySelector('#resultado').innerHTML = Math.random();

    // Del 0 al 10
    const aleatorio = Math.random();
    let numero = (aleatorio * 10) + 1;
    document.querySelector('#resultado').innerHTML = numero;
    numero = Math.floor(numero);
    document.querySelector('#resultado1').innerHTML = numero;
}

function generarRGB() {
    const aleatorio = Math.random();
    let numero = (aleatorio * 256);
    numero = Math.floor(numero);
    const rgb = 'RGB(' + numero + ', 255, 255)';

    document.body.style.backgroundColor = rgb;
}
**************************************************************/

function numeroAleatorio(numMax, noIncluyeCero) {
    const aleatorio = Math.random();
    let numero = (aleatorio * numMax);
    console.log(noIncluyeCero);
    if(noIncluyeCero){
        numero += 1;
    } 
    //numero = incluyeCero ? numero + 1 : numero;
    return Math.round(numero);
}

function cambiarBody() {
    const RGB = 'RGB(' + numeroAleatorio(255, true) + ','+ numeroAleatorio(255) + ',' + numeroAleatorio(255) + ')';
    document.querySelector('#resultado1').innerHTML = RGB;
    document.body.style.backgroundColor = RGB;
}
