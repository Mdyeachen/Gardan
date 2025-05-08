(function ($) {
    'use strict';


    $(".header-part").sticky({
        topSpacing: 0
    });

    $('body').scrollspy({
        target: '.navbar'
    });



    $('a.nav-link').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });


    $.wmBox();


    $(".project-protfolio-items").isotope();

    $('.jarallax').jarallax({
        speed: 0.2
    });

    $(".project-protfolio-menu-bar li").on("click", function () {


        var selector = $(this).attr("data-filter");
        $(".project-protfolio-items").isotope({
            filter: selector
        });
    });

    $('#top-botton').on("click", function () {
        jQuery("html, body").animate({
            scrollTop: $("#home").offset().top
        }, 900);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('.header-part').addClass('fixed-menu');
        } else {
            $('.header-part').removeClass('fixed-menu');
        };

       

        if ($(window).scrollTop() > 100) {
            $('.go_top').addClass('fixed-class');
        } else {
            $('.go_top').removeClass('fixed-class');
        }
    });
    $(window).on('load', function () {
         jQuery('.preloder-area').fadeOut('500');
    });

}(jQuery));
