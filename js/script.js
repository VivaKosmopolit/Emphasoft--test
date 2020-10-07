ScrollReveal().reveal('h2', { delay: 100, interval: 500, duration: 1500 });
ScrollReveal().reveal('.s-link', { delay: 100, interval: 200, duration: 1000 });

function btn(e) {
    let mobNav = document.querySelector('.mobile-wrapper');
    let mobWrapper = document.querySelector('.mobile-menu');
    if (e.className == 'burger-wrapper') {
        mobNav.style.transform = 'translateX(0)';
        mobWrapper.style.position = 'fixed';
        mobWrapper.style.backgroundColor = '#ffffff';
        e.classList.add('burger-btn_active');
    } else {
        mobNav.style.transform = 'translateX(-100%)';
        mobWrapper.removeAttribute("style");
        e.classList.remove('burger-btn_active');
    }
}
