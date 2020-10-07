ScrollReveal().reveal('h2', { delay: 100, interval: 500, duration: 1500 });
ScrollReveal().reveal('.s-link', { delay: 100, interval: 200, duration: 1000 });

function btn(e) {
    let mobNav = document.querySelector('.mobile-wrapper');
    if (e.className == 'burger-wrapper') {
        mobNav.style.transform = 'translateX(0)';
        e.classList.add('burger-btn_active');
    } else {
        mobNav.style.transform = 'translateX(-100%)';
        e.classList.remove('burger-btn_active');
    }
}