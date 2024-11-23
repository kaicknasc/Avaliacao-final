ScrollReveal().reveal("#buttonS1", {
    duration: 2000,
    origin: 'left',
    distance: '50px'
})

ScrollReveal().reveal(".image-s1", {
    duration: 3000,
    origin: 'bottom',
    distance: '60px'
})

ScrollReveal().reveal(".image-s4", {
    duration: 4000,
    origin: 'top',
    distance: '100px'
});

// Carrosel

$(document).ready(function() {

    // Seleciona o contêiner .carousel e aplica a função slick(). Que ativa o carrosel com as configurações abaixo.

    $(".carrosel").slick({

        // slidesToShow: número de cards exibidos ao mesmo tempo no carrosel.

        slidesToShow: 3,

        // slidesToScroll: define quantos cards serão deslizados ao mover o carrosel.

        slidesToScroll: 2,

        // Infinite: quando true, o carrosel retorna ao início automaticamente.

        infinite: true,

        // dots: quando true, ativa os pontos de navegação abaixo do carrosel

        dots: true,

        arrows: false,
    });
});