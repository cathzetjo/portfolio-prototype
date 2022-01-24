const burgerMenu = document.querySelector('.burger-menu');

function toggleMenu() {
    burgerMenu.classList.toggle('open');
}
burgerMenu.addEventListener('click', toggleMenu);