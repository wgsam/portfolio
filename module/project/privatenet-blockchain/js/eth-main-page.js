(function ($) {
    $(window).on("load", function () {
        $(".js-scrollbar").mCustomScrollbar({
            scrollInertia: 150,
            theme: 'minimal-dark'
        });

        // custom formatting example
        $('.count-number').data('countToOptions', {
            formatter: function (value, options) {
                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            }
        });
        $('.timer').each(count);

        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
    });

    $(window).scroll(function () {
        var $header = $(".header-main");
        // $header.toggleClass('scrolled', $(this).scrollTop() > $header.height());
        $header.toggleClass('scrolled', $(this).scrollTop() > 20);
    });
})(jQuery);

// particlesJS - bg matirx animation
particlesJS('particles-bg', {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": !0,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "opacity": .1,
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": .1,
                "random": !1,
                "anim": {
                    "enable": !1,
                    "speed": 1,
                    "opacity_min": .12,
                    "sync": !1
                }
            },
            "size": {
                "value": 6,
                "random": !0,
                "anim": {
                    "enable": !1,
                    "speed": 40,
                    "size_min": .08,
                    "sync": !1
                }
            },
            "line_linked": {
                "enable": !0,
                "distance": 150,
                "color": "#ffffff",
                "opacity": .2,
                "width": 1.3
            },
            "move": {
                "enable": !0,
                "speed": 6,
                "direction": "none",
                "random": !1,
                "straight": !1,
                "out_mode": "out",
                "bounce": !1,
                "attract": {
                    "enable": !1,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": !0,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": !0,
                    "mode": "push"
                },
                "resize": !0
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": .4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": !0
    },
    function () {
        console.log('callback - particles.js config loaded');
    });

// TweenMax Effect

TweenMax.from(".header-logo", 1, {
    delay: 0.2,
    opacity: 0,
    y: -20,
    ease: Expo.easeInOut
});

TweenMax.from(".navbar-nav", 1.2, {
    delay: 0.4,
    opacity: 0,
    y: -30,
    ease: Expo.easeInOut
});

TweenMax.from(".caption-content", 1.6, {
    delay: 0.1,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
});

TweenMax.from(".caption-search", 1.6, {
    delay: 0.2,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
});

TweenMax.from(".banner-header-img", 1.8, {
    delay: 0.3,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
});

// ScrollReveal effect

var slideUp = {
    origin: 'bottom',
    delay: 100,
    distance: '50px',
    easing: 'ease-in-out',
};

var slideUpSlow = {
    origin: 'bottom',
    delay: 120,
    distance: '100px',
    easing: 'ease-in-out',
};

var slideRight = {
    origin: 'left',
    delay: 30,
    distance: '20px',
    easing: 'ease-in-out',
};

var slideUpFooter1 = {
    origin: 'bottom',
    delay: 100,
    distance: '20px',
    easing: 'ease-in-out',
};
var slideUpFooter2 = {
    origin: 'bottom',
    delay: 150,
    distance: '40px',
    easing: 'ease-in-out',
};
var slideUpFooter3 = {
    origin: 'bottom',
    delay: 200,
    distance: '60px',
    easing: 'ease-in-out',
};
var slideUpFooter4 = {
    origin: 'bottom',
    delay: 250,
    distance: '80px',
    easing: 'ease-in-out',
};

var slideUpFooter5 = {
    origin: 'bottom',
    delay: 0,
    distance: '30px',
    easing: 'ease-in-out',
};

ScrollReveal().reveal('.block-header', slideUp);
ScrollReveal().reveal('.anim-blck-info', slideRight);
ScrollReveal().reveal('.block-txns-table', slideUpSlow);

ScrollReveal().reveal('.footer-main', slideUpFooter1);
ScrollReveal().reveal('.footer-camp', slideUpFooter2);
ScrollReveal().reveal('.footer-community', slideUpFooter3);
ScrollReveal().reveal('.footer-contact', slideUpFooter4);
ScrollReveal().reveal('.footer-media', slideUpFooter5);