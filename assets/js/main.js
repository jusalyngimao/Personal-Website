(function ($) {
    "use strict";

    /*:::::::::::::::::::::::::::::::::::
            Navbar Area
    :::::::::::::::::::::::::::::::::::*/

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $(".navbar").addClass("bg-primari");
        } else {
            $(".navbar").removeClass("bg-primari");
        }
    });

    const navbarLinks = document.querySelectorAll('#navbarLinks .nav-link');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbarLinks.forEach(item => item.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
        }); 
    });

    $(window).on('scroll', function () {
        var position = $(this).scrollTop();

        $('section').each(function () {
            var target = $(this).offset().top - 100; 
            var id = $(this).attr('id');

            if (position >= target) {
                navbarLinks.forEach(link => {
                    link.parentElement.classList.remove('active');
                });
                $(`#navbarLinks a[href="#${id}"]`).parent().addClass('active');
            }
        });

        if (position === 0) {
            navbarLinks.forEach(link => {
                link.parentElement.classList.remove('active');
            });
            $('#navbarLinks a[href="#home"]').parent().addClass('active');
        }
    });

    $(document).ready(function () {
        $('.nav-link').on('click', function (event) {
            var $anchor = $(this);
            var targetElement = $($anchor.attr('href'));
    
            if (targetElement.length) {
                $('html, body').stop().animate({
                    scrollTop: targetElement.offset().top - $('.navbar').outerHeight() 
                }, 1000); 
                event.preventDefault();
            }
        });
    });
    

    /*==========================
        Hero Area Slider
    ============================*/
    $('.hero-area-slids').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false, 
        autoplay: true,
        animateOut: 'fadeOutRight',
        animateIn: 'fadeIn'
    });

    new WOW().init();

    /*==========================
        Hero Title Typer
    ============================*/
    var element = $('.typed');
    $(function () {
        element.typed({
            strings: ["I.T. Student"],
            typeSpeed: 100,
            loop: true,
            autoplay: true
        });
    });
    

    /*::::::::::::::::::::::::::::::::::::
       Project Section
    ::::::::::::::::::::::::::::::::::::*/
    lightbox.option({
        'imageFadeDuration': 800,
        'resizeDuration': 500,
        'wrapAround': true
    });
    $('.project-area').mixItUp();

    /*::::::::::::::::::::::::::::::::::::
       Preloader
    ::::::::::::::::::::::::::::::::::::*/
    $(window).on('load', function () {
        $('.preloader').fadeOut();
    });

}(jQuery));