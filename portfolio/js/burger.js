const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuWindow = document.querySelector('.burger-menu-window');

function toggleMenu() {
    burgerMenu.classList.toggle('open');
    burgerMenuWindow.classList.toggle('open');
}

burgerMenu.addEventListener('click', toggleMenu);

function closeMenu(event) {
    if (event.target.classList.contains('nav-link-burger-menu')) {
        burgerMenu.classList.remove('open');
        burgerMenuWindow.classList.remove('open');
    }
}

const nav = document.querySelector('.nav-burger-menu');
nav.addEventListener('click', closeMenu);