$(document).ready(function (params) {
    const br = '<br><br>';
    $('#boton').click(
        function () {
            $('#parrafo2').html(
                $('#parrafo1').text() + '' + br + $('#cajaTexto').val() + br + $('#seleccionable option:selected').text() + '->' + $('#seleccionable option:selected').val() 
                + br + $('#cajaChequeo').is(':checked') + '->' + $('#cajaChequeo').val()
            );
        }
    );

    /*
    $('#bloque1 button').click(
        function () {
           // $('p').hide(); // Oculta todos los elementos p cuando apretamos el boton Cerrar
           // $('p').first().hide(); // Oculta todos los elementos p que se encuentran antes del boton cerrar
           $('p').hide();
        }
    );
    */

    /*
    $('#bloque1').click(
        function () { // Clickeando dentro de div borro el 'p' que se encuentra dentro de bloque1
           $('#bloque1').children('p').hide();
        }
    );
    */

    /*
    $('#bloque1 button').click(
        function () { // Clickeando en cerrar borro el bloque1
           $('#bloque1 button').parent().hide();
        }
    );
    */

    $('#bloque1 button').click(
        function () { // Clickeando en cerrar borro el bloque1
           $(this).siblings().hide();
        }
    );

    /********************************************/

    const bloque1 = $('#bloque1')
    $('#hide').click(function() {
        bloque1.hide();
    });

    $('#fadeOut').click(function() {
        bloque1.fadeOut();
    });

    $('#show').click(function(){
        bloque1.show();
    });

    $('#fadeIn').click(function(){
        bloque1.fadeIn();
    });

    /********************************************/
    // LENTO

    $('#hide_lento').click(function() {
        bloque1.hide(5000);
    });

    $('#fadeOut_lento').click(function() {
        bloque1.fadeOut(5000);
    });

    $('#show_lento').click(function(){
        bloque1.show(5000);
    });

    $('#fadeIn_lento').click(function(){
        bloque1.fadeIn(5000);
    });

    /********************************************/
    // RAPIDO

    $('#hide_rapido').click(function() {
        bloque1.hide(200);
    });

    $('#fadeOut_rapido').click(function() {
        bloque1.fadeOut(200);
    });

    $('#show_rapido').click(function(){
        bloque1.show(200);
    });

    $('#fadeIn_rapido').click(function(){
        bloque1.fadeIn(200);
    });

    /********************************************/

    $('#addClass').click(function(){
        bloque1.addClass('bloque2');
    });

    $('#removeClass').click(function(){
        bloque1.removeClass('bloque2');
    });


});

