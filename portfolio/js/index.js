import i18Obj from './translate.js';
import portfolio from './portfolio.js';
import burgerMenu from './burger.js';

portfolio();
burgerMenu();

function changeClassActive(element, selectorName){
    const allElements = document.querySelectorAll(`.${selectorName}`);
    allElements.forEach(element => element.classList.remove("active"));
    element.classList.add("active");
};

export default changeClassActive;


const ruLng = document.querySelector('.ru');
const enLng = document.querySelector('.en');
const elementToTranslate = document.querySelectorAll('[data-i18]');


function getTranslate(lang, clickedElement, className) {
    elementToTranslate.forEach( function (element){
        element.textContent = i18Obj[lang][element.dataset.i18];
        if (element.placeholder){
            element.placeholder = i18Obj[lang][element.dataset.i18];
        }
    });

    changeClassActive(clickedElement, `${className}`);
}

ruLng.addEventListener('click', ()=> getTranslate('ru', ruLng, 'lang'));
enLng.addEventListener('click', ()=> getTranslate( 'en', enLng, 'lang'));
