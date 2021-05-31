// BUCLES


// INDETERMINADOS

// WHILE (DEJE EN EL MINUTO 45)

/*
let edad = 0;
// Solamente festeje los cumpleaños hasta los 17
while (edad < 18) {
    edad++; // (del 1 al 16)
    ++edad;
    console.log('Feliz Cumpleaños numero: ' + (++edad));
    //edad++; aca me incluye el 0 (del 0 al 16)
    // Se logre terminar o cambiar la condicion.
}
*/

/*
let confirmacion = true;
while (confirmacion) {
    alert(window.prompt('Escribe una palabra:'));
    confirmacion = window.confirm('¿Quieres seguir escribiendo?')
}
alert('Ha finalizado la escritura');
*/

// DETERMINADOS
/*
let edad1 = 0;
while (edad1 < 18) {
    edad1++;
    console.log('Tu edad es: ' + edad1);
}*/


let nombres = ['Lucas', 'Carlos', 'Daiana', 'Fernando', 'Ancheluchi', 'Ornechu'];
// FOR
for(let i = 0; i < nombres.length; i++) {
    console.log('[' + i + ']' + ': ' + nombres[i]);
} // DEJE EN 1:05

// FOREACH
/*
for (let i in nombres) {
    console.log('[' + i + ']' + ': ' + nombres[i]);
}
*/

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue; // Cuando llega al 5 continua con el bucle.
        //break; Cuando llega a 5 rompe el sistema.
    } 
    console.log(i);
}

console.log('Comience con M:');
for (let i = 0; i < nombres.length; i++) {
    if(!nombres[i].startsWith('C')) {
        console.log(nombres[i]);
    }
    /* ES LO MISMO DEL CODIGO SIN COMENTAR
    if (nombres[i].startsWith('C')) { // Empieza con la letra 'C'
        continue;
    }
    console.log(nombres[i]);
    */
}

console.log('Terminen con s:');
for (let i = 0; i < nombres.length; i++) {
    if(!nombres[i].endsWith('s')) {
        console.log(nombres[i]);
    }
}

let palabra = 'Clari,Jessi,Vane,Nico,Anto,Fer';
let nombres2 = palabra.split(',');
console.log(nombres2);

for(let i = 0; i < nombres2.length; i++) {
    console.log(nombres2[i].toLocaleUpperCase());
}

// OBJETOS
const objetoPersona = {
    nombre: 'Carlitos',
    apellido: 'Figueroa',
    edad: 37,
    altura: 1.75,
    casado: true,
    trabajo: ['Jhonson', 'UTN'],
    length: 5
};

console.log('Objeto Persona:')
console.log('Nombre: ' + objetoPersona['nombre']);
console.log('Apellido: ' + objetoPersona.apellido);
console.log('Primer Trabajo: ' + objetoPersona.trabajo[0]);
console.log('Length: ' + objetoPersona.length);
objetoPersona.nombre = 'Lucas';
console.log(objetoPersona['nombre']);
