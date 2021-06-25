$(document).ready(function () {

    const boton = $('#mover');
    const pelota = $('#pelota');

    boton.click(function () {

        pelota.animate(
            {
                left: '+=50px',
                width: '-=25px',
                height: '-=25px',
                opacity: '-=0.5',
                //top: '+=50px'
            },
            1500).animate(
                {
                    //left: '-=50px',
                    width: '+=25px',
                    height: '+=25px',
                    opacity: '+=0.5',
                    top: '+50px'
                },
                1500).animate(
                    {
                        left: '-=50px',
                        width: '-=25px',
                        height: '-=25px',
                        opacity: '-=0.5'
                        //top: '+50px'
                    },
                    1500).animate(
                        {
                            //left: '-=50px',
                            width: '+=25px',
                            height: '+=25px',
                            opacity: '+=0.5',
                            top: '-=50px'
                        },
                        1500)

    });

});