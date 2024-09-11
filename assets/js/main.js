(function ($) {
    "use strict";

    /*:::::::::::::::::::::::::::::::::::
            Navbar Area
    :::::::::::::::::::::::::::::::::::*/

    // Navbar Sticky
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $(".navbar").addClass("bg-primari");
        } else {
            $(".navbar").removeClass("bg-primari");
        }
    });

    // Navbar Link Active State on Click
    const navbarLinks = document.querySelectorAll('#navbarLinks .nav-link');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbarLinks.forEach(item => item.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
        }); 
    });

    // Active Link on Scroll
    $(window).on('scroll', function () {
        var position = $(this).scrollTop();

        $('section').each(function () {
            var target = $(this).offset().top - 100; // Adjust offset for smoother activation
            var id = $(this).attr('id');

            if (position >= target) {
                // Remove 'active' class from all links
                navbarLinks.forEach(link => {
                    link.parentElement.classList.remove('active');
                });
                // Add 'active' class to the link corresponding to the section in view
                $(`#navbarLinks a[href="#${id}"]`).parent().addClass('active');
            }
        });

        // Handle edge case for home section (when at top of the page)
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
                    scrollTop: targetElement.offset().top - $('.navbar').outerHeight() // Adjust scroll position based on navbar height
                }, 1000); // Smooth scrolling to the section
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
        dots: false, // Fixed typo 'doots' to 'dots'
        autoplay: true,
        animateOut: 'fadeOutRight',
        animateIn: 'fadeIn'
    });

    // WOW Animation
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

    // Carousel functionality
    document.addEventListener('DOMContentLoaded', () => {
        const carousel = document.querySelector('.carousel');
        const prevButton = document.querySelector('.wrapper i:first-child');
        const nextButton = document.querySelector('.wrapper i:last-child');

        if (!carousel || !prevButton || !nextButton) {
            console.error('One or more essential elements are missing in the DOM.');
            return;
        }

        let isDragging = false, startX, scrollLeft;

        // Scroll carousel when clicking left or right buttons
        nextButton.addEventListener('click', () => {
            carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
            updateButtonsVisibility();
        });

        prevButton.addEventListener('click', () => {
            carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
            updateButtonsVisibility();
        });

        // Drag to scroll functionality
        carousel.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
            carousel.classList.add('dragging');
        });

        carousel.addEventListener('mouseleave', () => {
            isDragging = false;
            carousel.classList.remove('dragging');
        });

        carousel.addEventListener('mouseup', () => {
            isDragging = false;
            carousel.classList.remove('dragging');
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2; // Multiply to increase scroll speed
            carousel.scrollLeft = scrollLeft - walk;
            updateButtonsVisibility();
        });

        // Update visibility of left/right buttons based on scroll position
        function updateButtonsVisibility() {
            prevButton.style.display = carousel.scrollLeft === 0 ? 'none' : 'block';
            nextButton.style.display = carousel.scrollWidth - carousel.clientWidth === carousel.scrollLeft ? 'none' : 'block';
        }

        // Initial visibility check for buttons
        updateButtonsVisibility();
    });

}(jQuery));
