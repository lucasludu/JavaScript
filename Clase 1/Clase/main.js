// COMENTARIO EN LINEA
/*
    COMENTARIO EN VARIAS LINEAS
*/ 


// alert('Hola Externo');

// JS e sun lenguaje de tipado dinamico
/*
 suma;    NOOO
*/

/* Variables --> Define espacio de memoria, identifica y es cambiable

    identificar variables 
    CamelCase --> LucasLudu
    snakeCase --> lucas_Ludu

*/

/*
    var nombre; // Recomendable hacerlo con CamelCase
    let nombre2 // otra forma de poner la variable.

    // Constantes --> Guardan info pero no cambian.
    const VERSION_SISTEMA; // Recomentable hacerlo con snakeCase
*/

/*
    Si pongo typeof en la consola del navegador me va devolver el tipo de variable 
*/

// Varios tipos y formas de guardar
var nombre = 'Hola'; //         "" || ''
var nombre1 = "I'm"; // Por necesidad de usar comilla simple uso las " "
let nombre2 = 'Lucas Ludu';
nombre3 = 'Dai Bil'; // Se puede poner sin variable, el compilador del navegador lo asume como un String
const VERSION = '1.5';
// VERSION = 8; No se puede modificar, va tirar error

let numero = 2.6;
let esMayor = true; // or false     Puede ser modificado por Consola del navegador

/** JS ES TIPADO DEBIL PORQUE ES FACIL DE CAMBIARLE LAS VARIABLES POR CONSOLA DEL NAVEGADOR **/

// ARREGLOS
let nombres = ['Lucas', true, 5, 'Clari', 'Carlitos', 'Daiana']; // Puede tener booleanos, numeros

console.log(nombres[1]); // Imprime la 1ra posicion de memoria de la variable nombres
console.log(nombres); // Imprime todo el arreglo

nombres[2] = false;
console.log(nombres[2]);
 

document.write(nombre); /** Primero me va salir el nombre y despues el H1 de HTML **/
const inicioH2 = '<h2>';
const finH2 = '</h2>';
document.write('<h2>'+ nombre +'<h2>'); /* Lo va imprimir en tipo H2 */
document.write(inicioH2 + nombres[3] + finH2); /* Lo va imprimir en tipo H2 */

// OPERAR VARIABLES MATEMATICOS

const number1 = 8;
const number2 = 15;
let total = number1 + number2;
console.log(total);
total = total + 1;
console.log(total);
total++;
console.log(total);
total+=2;
console.log(total);
total--;
console.log(total);
total*=2;
console.log(total);
total/=3;
console.log(total);
total*=2;
console.log(total);
total%=2; // Resto de la division
console.log(total);

total = 16 % 5; // Resto de la division
console.log(total);
total = 100 % 6; // Resto de la division
console.log(total);

// CONDICIONALES - RELACIONALES

let edad = 15;
console.log(edad > 17); // Devuelven valor booleano
console.log(edad <= 17);
console.log(edad == 17);

let mayorEdad = false;
mayorEdad = edad > 17; // Operador relacional
console.log(mayorEdad);

// tambien existe el ===
console.log('consola')
console.log(15 == '15');
console.log('igualdad estricta');
console.log('15' === '15');

console.log(2 + (+'5')); // Poniendo +'5' convierto la cadena de caracter en int
console.log(15 + '5'); // Devuelve la cadena de caracter en ASCII
console.log(5 + '2');

// Jerarquia de operadores () --> si no estan los parentesis se operan de izq a der * y /   + y -    5/8+9    --> (5/8)+9

/** 
    OPERADORES LOGICOS
    && --> Y    || --> O
                         **/
                       
let operador = "m";

// puede multiplicar si es m y si es *
let opera = (operador == "m" && operador == "*")

console.log(5 !== '5');

// alert
// window.prompt('Hola tipea algo ' , 'Title');


const valor1 = window.prompt('Ingresa un usuario','tu usuario    ');
alert(valor1);
alert(window.prompt('Pregunta dentro de alerta'));

const continuar = window.confirm('Desea continuar en esta pagina?');
alert(continuar);
