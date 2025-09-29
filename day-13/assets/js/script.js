$(document).ready(function() {
    /* ===== SLIDER FUNCTIONALITY ===== */
    let currentSlide = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    $('.next-btn').on('click', function() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlider();
        }
    });

    $('.prev-btn').on('click', function() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    });

    function updateSlider() {
        $('.slider').css('transform', `translateX(-${currentSlide * 100}%)`);
    }

    /* ===== MOBILE MENU FUNCTIONALITY ===== */
    $('.menu-icon').click(function() { 
        $('.mobile-menu').addClass('active');
    });

    $('.close-icon').click(function() {
        $('.mobile-menu').removeClass('active');
    });

    // Only clone once on page load
    if ($(window).width() <= 768) {
        $('.navbar').clone().appendTo('.mobile_menu_body');
    }

    // Optional: update on resize
    $(window).resize(function() {
        if($(window).width() > 768) {
            $('.mobile_menu_body').empty();
        } else {
            if ($('.mobile_menu_body').children().length === 0) {
                $('.navbar').clone().appendTo('.mobile_menu_body');
            }
        }
    });
});
