// TweenMax Effect

TweenMax.from(".navbar-nav", 1, {
    delay: 0.1,
    opacity: 0,
    y: -30,
    ease: Expo.easeInOut
});


TweenMax.from(".banner-content", 1.5, {
    delay: 0.2,
    opacity: 0,
    x: -80,
    ease: Expo.easeInOut
});

TweenMax.from(".diamond", 1.5, {
    delay: 0.3,
    opacity: 0,
    x: -80,
    ease: Expo.easeInOut
});


TweenMax.staggerFrom(".transaction-item", 2, {
    delay: 0.4,
    opacity: 0,
    y: 80,
    ease: Expo.easeInOut
}, 0.2);