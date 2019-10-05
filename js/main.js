$(document).ready(function(){
    $("#carousel-1").owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items:1,
            },
            640:{
                items:1,
            },
            1024:{
                items:2
            }
        }
    });

    $("#nav-btn").click(function(){
        $("#navigation").toggleClass("nav__list--close");
        $("#nav-btn").toggleClass("nav__toggle--close");
    });

    if($(window).width() > 640) {
        $("#navigation").removeClass("nav__list--close");
    }
});

