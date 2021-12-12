console.clear();

const data = 'json/heart-animation.json';
const container = document.querySelector('.lottie');
let isActive = false;

const animation = bodymovin.loadAnimation({
    container: container,
    path: data,
    renderer: 'svg',
    loop: false,
    autoplay: false
});


container.addEventListener('click', function (e) {
    e.preventDefault();
    if (isActive) {
        container.classList.remove('is-active');
        animation.stop();
    } else {
        container.classList.add('is-active');
        setTimeout(() => {
            animation.play();
        }, 20);
    }
    isActive = !isActive;
});

animation.addEventListener('complete', e => {
    animation.stop();
});