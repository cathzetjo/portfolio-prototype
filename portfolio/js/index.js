import i18Obj from './translate.js';
import portfolio from './portfolio.js';
import burgerMenu from './burger.js';

portfolio();
burgerMenu();

function changeClassActive(element, selectorName) {
    const allElements = document.querySelectorAll(`.${selectorName}`);
    allElements.forEach(element => element.classList.remove("active"));
    element.classList.add("active");
};

export default changeClassActive;


const ruLng = document.querySelector('.ru');
const enLng = document.querySelector('.en');
const elementToTranslate = document.querySelectorAll('[data-i18]');


function getTranslate(lang, clickedElement, className) {
    elementToTranslate.forEach(function (element) {
        element.textContent = i18Obj[lang][element.dataset.i18];
        if (element.placeholder) {
            element.placeholder = i18Obj[lang][element.dataset.i18];
        }
    });

    changeClassActive(clickedElement, `${className}`);
}

ruLng.addEventListener('click', () => getTranslate('ru', ruLng, 'lang'));
enLng.addEventListener('click', () => getTranslate('en', enLng, 'lang'));


let flag = 'dark';

const body = document.querySelector("body");
const headerContainer = document.querySelector(".header-container");
const heroContainer = document.querySelector(".hero-container");
const contactsContainer = document.querySelector(".contacts");
const sectionTitle = document.querySelectorAll(".section-title");
const inputs = document.querySelectorAll(".contacts-input");
const titles = document.querySelectorAll("h2");
console.log(flag);
function changeThemeLight() {

        flag = 'light';
        body.style.setProperty('--body-color', '#fffdf7');
        body.style.setProperty('--font-color-main', '#000000');
        sectionTitle.forEach(element => element.style.setProperty('--gold', '#000000'));
        sectionTitle.forEach(element => element.style.setProperty('--body-color', '#fffdf7'));

        headerContainer.style.background = "url('./assets/img/bg2.jpg')";
        heroContainer.style.backgroundImage = "url('./assets/img/bg2.jpg')";
        contactsContainer.style.background = "url('./assets/img/contacts2.jpg')";

        inputs.forEach(element => element.style.color = "#000000");
        inputs.forEach(element => element.style.backgroundColor = "rgba(255, 255, 255, 0.5)");
        titles.forEach(element => element.style.color = "#000000");
    console.log(flag);
}

function changeThemeDark() {

    flag = 'dark';

    body.style.setProperty('--body-color', '#000000');
    console.log(flag);

}


const themeSwitcher = document.querySelector('.theme-switcher');

    themeSwitcher.addEventListener('click', () => {
        if (flag === 'dark') {
            changeThemeLight()
        }

        if (flag === 'light') {
            changeThemeDark()
        }

    });





