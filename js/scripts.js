$('.icon').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('icon-active');
    $('.menu-nav').toggleClass('menu-nav-active');
});


$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', '' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:2
            }
        }
    });
});