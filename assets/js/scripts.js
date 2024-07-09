$(document).ready(function() {
    $('#carouselExample').carousel({
        interval: 3000 // Cambia el valor para ajustar la velocidad del carrusel
    });

    $('#enviarCorreo').click(function() {
        alert('El correo fue enviado correctamente...');
    });

    $("h4:contains('INGREDIENTES')").on('dblclick', function() {
        $(this).toggleClass('red-text');
    });
       
    $("h4:contains('PREPARACIÓN')").on('dblclick', function() {
        $(this).toggleClass('red-text');
    });

    $(".card-title").click(function() {
        $(this).next(".card-text").toggle();
    });

});

