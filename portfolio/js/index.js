import portfolio from './portfolio.js';
import burgerMenu from './burger.js';
import theme from './theme.js';
import toChangeLanguage from './lang.js';


function changeClassActive(element, selectorName) {
    const allElements = document.querySelectorAll(`.${selectorName}`);
    allElements.forEach(element => element.classList.remove("active"));
    element.classList.add("active");
};

export default changeClassActive;

portfolio();
burgerMenu();
toChangeLanguage();
theme();




