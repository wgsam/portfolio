$(document).ready(function () {
    $(document).on('click', '.nav-item a', function (e) {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
});

$(window).scroll(function () {
    // Desktop content switch
    if ($(document).scrollTop() >= $("#content-01").offset().top - $(window).height() && $(document).scrollTop() < $("#content-02").offset().top - $(window).height()) {
        $('#img-slider').css('background-image', 'url(assets/images/foodbank/phone-slice1.png)')
    };

    if ($(document).scrollTop() >= $("#content-02").offset().top - $(window).height() && $(document).scrollTop() < $("#content-03").offset().top - $(window).height()) {
        $('#img-slider').css('background-image', 'url(assets/images/foodbank/phone-slice2.png)')
    };

    if ($(document).scrollTop() >= $("#content-03").offset().top - $(window).height() && $(document).scrollTop() < $("#content-04").offset().top - $(window).height()) {
        $('#img-slider').css('background-image', 'url(assets/images/foodbank/phone-slice3.png)')
    };

    if ($(document).scrollTop() >= $("#content-04").offset().top - $(window).height() && $(document).scrollTop()) {
        $('#img-slider').css('background-image', 'url(assets/images/foodbank/phone-slice4.png)')
    };

    // Overlay Black Bb
    if ($(document).scrollTop() >= $("#overlay-fadein").offset().top - $(window).height() && $(document).scrollTop() < $("#overlay-fadeout").offset().top - $(window).height()) {
        $(".overlay-black").fadeIn();
    } else {
        $(".overlay-black").fadeOut();
    };

    // Mobile content switch
    if ($(document).scrollTop() >= $("#mobile-content-01").offset().top - $(window).height() && $(document).scrollTop() < $("#mobile-content-02").offset().top - $(window).height()) {
        $('.mobile-img-slider').css('background-image', 'url(assets/images/foodbank/phone-slice1.png)')
    };

    if ($(document).scrollTop() >= $("#mobile-content-02").offset().top - $(window).height() && $(document).scrollTop() < $("#mobile-content-03").offset().top - $(window).height()) {
        $('.mobile-img-slider').css('background-image', 'url(assets/images/foodbank/phone-slice2.png)')
    };

    if ($(document).scrollTop() >= $("#mobile-content-03").offset().top - $(window).height() && $(document).scrollTop() < $("#mobile-content-04").offset().top - $(window).height()) {
        $('.mobile-img-slider').css('background-image', 'url(assets/images/foodbank/phone-slice3.png)')
    };

    if ($(document).scrollTop() >= $("#mobile-content-04").offset().top - $(window).height() && $(document).scrollTop()) {
        $('.mobile-img-slider').css('background-image', 'url(assets/images/foodbank/phone-slice4.png)')
    };
});