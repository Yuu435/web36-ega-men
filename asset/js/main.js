// Call lib owlCarousel
$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true, //Vong lap
        margin: 10, //Khoang cach giua cac item
        nav: true, //Dieu huong slide
        autoplay: true,
        dots: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

});



