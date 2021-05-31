var rta = window.prompt('¿Cual es su Rol?');
if(rta == 'admin' || rta == 'recursos') {
    var clave = prompt('Ingrese su clave');
    if (clave == 1234) {
        var usuario = prompt('¿Cual es su nombre de usuario?')
    }
} else {
    window.location.href = 'error.html';
}
document.querySelector('#header').innerHTML = '<h1>Hola ' + usuario + ' bienvenidos a nuestra aplicación</h1>';