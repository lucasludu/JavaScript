//let number1  = Number(prompt('Ingrese primer numero:'));
let n1 = window.prompt('Primer Numero:');
let operador = window.prompt('Ingrese el operador:\n (+ , - , * , /) || (s , r , m , d)');
//let number2  = Number(prompt('Ingrese segundo numero:'));
let n2 = window.prompt('Segundo Numero:')

let total = 0;
let operacion = '';


//alert(number1 + ' ' + operador + ' ' + number2);
alert(n1 + ' ' + operador + ' ' + n2);


// CONDICIONALES
/*
if (operador == '+') {
    total = number1 + number2;
    operacion = 'SUMA';
}*/

if (operador == '+' || operador == 's') {
    total = (+n1) + (+n2); //(+n1) combierto el string en un dato numerico
    operacion = 'SUMA';
} else if (operador == '-' || operador == 'r') {
    total = (+n1) - (+n2);
    operacion = 'RESTA';
} else if (operador == '*' || operador == 'm') {
    total = (+n1) * (+n2);
    operacion = 'MULTIPLICACION';
} else if (operador == '/' || operador == 'd') {
    if (n2 == 0){
        alert('No se puede dividir por CERO');
        window.location.href = 'error.html';
    } else {
        total = (+n1) / (+n2);
        operacion = 'DIVISION';
    }
} else {
    alert('Caracter Invalido');
    window.location.href = 'error.html';
}

document.write('<h1>CALCULADORA</h1>');
document.write('<h2>' + operacion + '</h2>');
document.write('<h2>' + total     + '</h2>');

/*
if(operacion == 'SUMA') 
    document.write('Estamos Sumando');
else if (operacion == 'RESTA') 
    document.write('Estamos Restando');
else 
    document.write('No estamos sumando ni restando');
*/

/*
if(operador == '+' || operador == '-') {
    // si se suma o se resta entra al codigo de adentro
}
*/

document.write('Usando Switch<br>');
switch(operador) {
    case 's':
    case '+':
        document.write('Suma');
        break;
    case 'r':
    case '-':
        document.write('Resta');
        break;
    case 'm':
    case '*':
        document.write('Multiplicacion');
        break;
    case 'd': 
    case '/':
        document.write('Division');
        break;
}