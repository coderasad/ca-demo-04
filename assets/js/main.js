(function($) {
    "use strict";

    //===== Prealoder
    $(window).on('load', function(event) {
        $('.proloader').delay(500).fadeOut(500);
    });


    // sticky
    var wind = $(window);
    var sticky = $('.header-bar-area');
    wind.on('scroll', function() {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

    /* ----------------------------------------
           Responsive Mega Menu
     ------------------------------------------*/

    function startsMmenu() {
        $('#menu').mmenu();
    }
    $(document).ready(function() {
        if ($(window).width() < 992) {
            startsMmenu();
        }
    });

    $(window).resize(function() {
        if ($(window).width() < 992) {
            startsMmenu();
        }
    });





    /* ----------------------------------------
           Counter animation
     ------------------------------------------*/
    $('.counter-text').appear(function() {
        var element = $(this);
        var timeSet = setTimeout(function() {
            if (element.hasClass('counter-text')) {
                element.find('.counter-value').countTo();
            }
        });
    });
    // Nice select 
    $('select').niceSelect();


    $(".hero_slider").owlCarousel({
        items: 1,
        nav: false,
        dot: true,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: false,
        margin: 0,
        smartSpeed: 1050,
        responsiveClass: true,



    });

    $(".feature__item_wrap").owlCarousel({
        items: 4,
        nav: true,
        navText: ['<img class="feature__prev" src="assets/img/arrow__left.png" alt="Image"> <img class="feature_prev" src="assets/img/arrow-left.png" alt="Image">', '<img class="feature__next" src="assets/img/arrow__right.png" alt="Image"> <img class="feature_next" src="assets/img/arrow-right.png" alt="Image">'],
        dot: false,
        autoplay: true,
        autoplayTimeout: 4000,
        loop: false,
        margin: 0,
        smartSpeed: 1200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                loop:false,
                autoplay:true,
                nav: true,
                
            },
            768: {
                items: 2,
                margin: 80

            },
            992: {
                items: 3,
                margin: 50

            },
            1000: {
                items: 4,

            }
        }
  



    });

 $(".partner_wrap").owlCarousel({
        items: 10,
        nav: false,
        dot: false,
        autoplay: true,
        autoplayTimeout: 2500,
        loop: true,
        margin: 30,
        smartSpeed: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 4,
                margin: 20
            },
            768: {
                items: 5,
                margin: 30

            },
            992: {
                items: 7,
                margin: 50

            },
            1200: {
                items: 10,

            }
        }
    

    });
 $(".partner__wrap").owlCarousel({
        items: 10,
        rtl:true,
        nav: false,
        dot: false,
        autoplay: true,
        autoplayTimeout: 2500,
        loop: true,
        margin: 30,
        smartSpeed: 4600,
        responsiveClass: true,
        responsive: {
            0: {
                items: 4,
                margin: 20
            },
            768: {
                items: 5,
                margin: 30

            },
            992: {
                items: 7,
                margin: 50

            },
            1200: {
                items: 10,

            }
        }
    

    });

    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });














})(jQuery);