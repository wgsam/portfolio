jQuery(document).ready(function ($) {
    $('.slickPartner').slick({
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplaySpeed: 2500,
        autoplay: false,
        arrows: true,
        draggable: true,
        infinite: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });

    $('.slickReview').slick({
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2500,
        autoplay: false,
        arrows: true,
        draggable: true,
        infinite: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});