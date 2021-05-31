let mensaje;
var fecha = new Date();
var day = fecha.getDay();
switch(day) {
    case 0:
        mensaje = "Domingo";
        break;
    case 1:
        mensaje = "Lunes";
        break;
    case 2:
        mensaje = "Martes";
        break;
    case 3:
        mensaje = "Miercoles";
        break;
    case 4:
        mensaje = "Jueves";
        break;
    case 5:
        mensaje = "Viernes";
        break;
    case 6:
        mensaje = "Sabado";
        break;
}
alert(mensaje);

let msj;
var fecha1 = new Date();
var mes = fecha1.getMonth();
switch(mes) {
    case 0:
        msj = "Enero";
        break;
    case 1:
        msj = "Febrero";
        break;
    case 2:
        msj = "Marzo";
        break;
    case 3:
        msj = "Abril";
        break;
    case 4:
        msj = "Mayo";
        break;
    case 5:
        msj = "Junio";
        break;
    case 6:
        msj = "Julio";
        break;
    case 7:
        msj = "Agosto";
        break;
    case 8:
        msj = "Septiembre";
        break;
    case 9:
        msj = "Octubre";
        break;
    case 10:
        msj = "Noviembre";
        break;
    case 11:
        msj = "Diciembre";
        break;
}
alert(msj);