$(document).ready(function () {
    // Hamburger menu toggle
    $(".menu-icon").click(function () {
        $(this).toggleClass("active"); 
        $(".nav").toggleClass("active"); 
        $(".header-auth").toggleClass("active"); 
    });

    // Reset active classes on window resize
    $(window).resize(function () {
        if ($(window).width() > 768) {
            $(".menu-icon, .nav, .header-auth").removeClass("active"); 
        }
    });

    // Slick slider initialization
    $('.feedback-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 }
            }
        ]
    });
});