var empleados = [
    {
        nombre: 'Lucas',
        apellido: 'Ludu',
        edad: 28
    },
    {
        nombre: 'Carlitos',
        apellido: 'Figueroa',
        edad: 30
    },
    {
        nombre: 'Clari',
        apellido: 'Ortega',
        edad: 34
    }
];

ciclo();

function agregar() {
    info1 = document.getElementById('nombreCaja').value;
    info2 = document.getElementById('apellidoCaja').value;
    info3 = document.getElementById('edadCaja').value;
    empleados.push({nombre: info1, apellido: info2, edad: info3})

    document.getElementById('nombreCaja').value = "";
    document.getElementById('apellidoCaja').value = "";
    document.getElementById('edadCaja').value = "";
}

ciclo();

function ciclo() {
    mensaje = '<tr><th>Nombre</th><th>Apellido</th><th>Edad</th></tr>';
    for (i = 0; i < empleados.length; i++) {
        mensaje += '<tr><td>' + empleados[i].nombre + '</td><td>' + empleados[i].apellido + '</td><td>' + empleados[i].edad + '</td></tr>';
    }
    document.getElementById('caja').innerHTML = mensaje;
}