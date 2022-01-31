import i18Obj from "./translate.js";
import changeClassActive from './index.js';

function toChangeLanguage() {

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
}

export default toChangeLanguage;