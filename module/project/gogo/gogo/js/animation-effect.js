// TweenMax Effect

TweenMax.from(".gogo-logo", 1, {
        delay: 0.2,
        opacity: 0,
        y: -30,
        ease: Expo.easeInOut
});

TweenMax.from(".gm-caption h1", 1.2, {
        delay: 0.2,
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut
});

TweenMax.from(".gm-text", 1.2, {
        delay: 0.3,
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut
});

TweenMax.from(".qr-code", 1.5, {
        delay: 0.3,
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut
});

TweenMax.from(".qr-link", 1.5, {
        delay: 0.4,
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut
});

TweenMax.from(".bg-phone", 1.5, {
        delay: 0.6,
        opacity: 0,
        y: 50,
        ease: Expo.easeInOut
});

//reg
TweenMax.from(".reg-caption h1", 1.2, {
        delay: 0.2,
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut
});

TweenMax.from(".reg-banner", 1.2, {
        delay: 0.3,
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut
});

TweenMax.from(".reg-box-a", 1.5, {
        delay: 0.4,
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut
});

TweenMax.from(".reg-box-b", 1.5, {
        delay: 0.5,
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut
});

TweenMax.from(".reg-box-c", 1.5, {
        delay: 0.6,
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut
});

TweenMax.from(".reg-box-d", 1.5, {
        delay: 0.7,
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut
});

TweenMax.from(".reg-box-e", 1.5, {
        delay: 0.8,
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut
});



// ScrollReveal
var slideUpSlow1 = {
        origin: 'bottom',
        delay: 200,
        distance: '50px',
        easing: 'ease-in-out',
};

var slideUpSlow2 = {
        origin: 'bottom',
        delay: 250,
        distance: '50px',
        easing: 'ease-in-out',
};

var slideUpSlow3 = {
        origin: 'bottom',
        delay: 300,
        distance: '50px',
        easing: 'ease-in-out',
};

var slideUpSlow4 = {
        origin: 'bottom',
        delay: 330,
        distance: '50px',
        easing: 'ease-in-out',
};

ScrollReveal().reveal('.anim-fs', slideUpSlow1);
ScrollReveal().reveal('.anim-nd', slideUpSlow2);
ScrollReveal().reveal('.anim-thd', slideUpSlow3);
ScrollReveal().reveal('.anim-frd', slideUpSlow4);