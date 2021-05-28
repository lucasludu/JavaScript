

let mensaje = '';
const mayorEdad = false; // ¿Qué edad tienes?


if (mayorEdad) { // es como poner (== true)
    mensaje = 'Eres mayor de edad.';
} else {
    mensaje = 'Eres menor de edad.';
}
console.log(mensaje);

// OPERADOR TERNARIO
if (mayorEdad) mensaje = 'Eres mayor de edad'; else mensaje = 'Eres menor de edad';
console.log(mensaje);

mensaje = (mayorEdad == true) ? 'Mayor de edad' : 'Menor de edad';
console.log(mensaje);

console.log(mayorEdad ? 'Mayor' : 'Menor');

if(!mayorEdad){
    console.log('No paga el colectivo');
} else {
    console.log('Si paga el colectivo');
}

// Toca el boton si la varible es igual a true. Sino cambiala a false
/*
mayorEdad = !mayorEdad;
if (25 > 17) {
    mayorEdad = true;
} else {
    mayorEdad = false;
}

mayorEdad = (25 > 17) ? true : false;  // NO tiene que ser booleana*/