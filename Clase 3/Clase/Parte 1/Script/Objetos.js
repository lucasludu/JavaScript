var alumno = {
    nombre : 'Lautaro',
    apellido : 'Perez',
    cursos: ['JS', 'Python', 'HTML', 'CSS'],
    direcciones: {
        ciudad: 'CABA',
        calle: 'Corrientes'
    },
    imprimirCursos: function() {
        console.log('Cursos de ' + this.nombre);
        for(i = 0; i < this.cursos.length; i++) {
            console.log(this.cursos[i]);
        }
    },
    imprimirAtributos: function() {
        console.log('Mi nombre es: ' + this.nombre + ' ' + this.apellido + ' y vivo en ' + this.direcciones.ciudad + ' ' + this.direcciones.calle);
    }
};

console.log(alumno.nombre);
alumno.imprimirAtributos();
alumno.imprimirCursos();

/**********************************
console.log(alumno);
console.log(alumno.nombre);
console.log(alumno['apellido']);

alumno.apellido = 'Robleto';
console.log(alumno['apellido']);

alumno.edad;
alumno.edad = 35;
console.log(alumno.edad);

const numero = 5;
numero = 8;
console.log(numero);
**************************************/

for(const propiedad in alumno) {
    console.log(propiedad + ' --> ' + alumno[propiedad]);
}


/***********************************************
function imprimirCursos() {
    for(const indice in alumno.cursos) {
        console.log(alumno.cursos[indice]);
    }
}
imprimirCursos();
************************************************/

const arreglo = [
    {
        nombre: 'Lucas',
        imprimir: function() {
            alert(this.nombre)
        }
    },
    {
        nombre: 'Carlitos',
        imprimir: function() {
            alert(this.nombre)
        }
    },
    {
        nombre: 'Daiana',
        imprimir: function() {
            alert(this.nombre)
        }
    },
    {
        nombre: 'Valeria',
        imprimir: function() {
            alert(this.nombre)
        }
    }
];

for (i = 0; i < arreglo.length; i++) {
    arreglo[i].imprimir();
}

