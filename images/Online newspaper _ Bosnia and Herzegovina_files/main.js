$(document).ready(function() {
    $('.menu').on('click', function() {
        $(this).toggleClass('change');
        $('.top-nav').toggleClass('change');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu').removeClass('change');
        $('.top-nav').removeClass('change');
    });

    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });
    
    $(window).scroll(function () {
        if($(this).scrollTop() > 40) {
            $("#up").fadeIn();
        } else {
            $("#up").fadeOut();
        }
    });
    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })
});
