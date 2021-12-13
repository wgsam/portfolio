console.clear();

// Tabs
const tabChange = (element) => {
    if (element) {
        const tabs = element.closest('.tabs');
        const tabTarget = document.getElementById(element.getAttribute('href').replace('#', ''));

        // Buttons
        tabs.querySelectorAll('.tab-button').forEach((button) => {
            if (button === element) {
                button.classList.add('js-active');
                button.setAttribute('aria-selected', true);
                button.setAttribute('tabindex', 1);
                button.focus();
            } else {
                button.classList.remove('js-active');
                button.setAttribute('aria-selected', false);
                button.setAttribute('tabindex', -1);
            }
        });

        // Content
        tabs.querySelectorAll('.tab-content').forEach((content) => {
            if (content === tabTarget) {
                content.classList.add('js-active');
            } else {
                content.classList.remove('js-active');
            }
        });
    }
};
const tabOpen = (event) => {
    event.preventDefault();
    const element = event.target;

    tabChange(element);
};
const tabButtonOpen = document.querySelectorAll('[data-action="tab-open"]');
tabButtonOpen.forEach((button) => {
    button.addEventListener('click', tabOpen);
});

if (window.location.hash.indexOf('tab') > -1) {
    tabChange(document.getElementById(document.getElementById(window.location.hash.replace('#', '')).getAttribute('aria-labelledby')));
}

window.addEventListener('hashchange', () => {
    if (window.location.hash.indexOf('tab') > -1) {
        tabChange(document.getElementById(document.getElementById(window.location.hash.replace('#', '')).getAttribute('aria-labelledby')));
    }
}, false);

window.addEventListener('keydown', (event) => {
    const tabs = document.activeElement.closest('.tabs');

    if (tabs) {
        const tabButtonCurrent = tabs.querySelector('.tab-button.js-active');

        // 37 = left = prevoius
        if (event.keyCode === 37) {
            if (tabButtonCurrent.parentNode.previousElementSibling && tabButtonCurrent.parentNode.previousElementSibling.querySelector('a')) {
                tabChange(tabButtonCurrent.parentNode.previousElementSibling.querySelector('a'));
            }
        }
        // 39 = right = next
        if (event.keyCode === 39) {
            if (tabButtonCurrent.parentNode.nextElementSibling && tabButtonCurrent.parentNode.nextElementSibling.querySelector('a')) {
                tabChange(tabButtonCurrent.parentNode.nextElementSibling.querySelector('a'));
            }
        }
        // 36 = home = first tab
        if (event.keyCode === 36) {
            if (tabButtonCurrent.parentNode.parentNode.firstChild && tabButtonCurrent.parentNode.parentNode.firstChild.querySelector('a')) {
                tabChange(tabButtonCurrent.parentNode.parentNode.firstChild.querySelector('a'));
            }
        }
        // 35 = end = last tab
        if (event.keyCode === 35) {
            if (tabButtonCurrent.parentNode.parentNode.lastChild && tabButtonCurrent.parentNode.parentNode.lastChild.querySelector('a')) {
                tabChange(tabButtonCurrent.parentNode.parentNode.lastChild.querySelector('a'));
            }
        }
    }
});