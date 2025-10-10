
$(document).ready(function() {
    // Initialize Slick slider for testimonials
    $('.testimonial-slider').slick({
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">❮</button>',
        nextArrow: '<button type="button" class="slick-next">❯</button>',
        infinite: true,
        autoplay: false,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });

    // Apply dark mode from localStorage
    if (localStorage.getItem("theme") === "dark") {
        $("body").addClass("dark-mode");
    }

    // Function to handle navbar cloning for mobile menu
    function updateMobileMenu() {
        var deviceWidth = $(window).width();
        if (deviceWidth < 768) {
            // Clear existing content to avoid duplicates
            $('.mobile_menu_body').empty();
            // Clone navbar and button, then append to mobile menu
            $('.navbar').clone().appendTo('.mobile_menu_body');
            $('.btn').clone().appendTo('.mobile_menu_body');
        } else {
            // Optionally clear mobile menu when above 768px
            $('.mobile_menu_body').empty();
        }
    }

    // Run on page load
    updateMobileMenu();

    // Run on window resize
    $(window).resize(function() {
        updateMobileMenu();
    });

    // Hamburger menu toggle
    $('.menu-icon').click(function() {
        $('.mobile-menu').addClass('active');
    });

    $('.close-icon').click(function() {
        $('.mobile-menu').removeClass('active');
    });

    // Toggle theme
    $("#theme-toggle").click(function() {
        $("body").toggleClass("dark-mode");
        if ($("body").hasClass("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});