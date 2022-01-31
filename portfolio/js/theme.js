import changeClassActive from './index.js';

function toChangeTheme() {

    let flag = 'dark';

    const themeSwitcher = document.querySelector('.theme-switcher');
    const body = document.querySelector("body");
    const headerContainer = document.querySelector(".header-container");
    const heroContainer = document.querySelector(".hero-container");
    const contactsContainer = document.querySelector(".contacts");
    const sectionTitle = document.querySelectorAll(".section-title");
    const inputs = document.querySelectorAll(".contacts-input");
    const contactTitle = document.querySelector(".contact-title");
    const languageBtns = document.querySelectorAll(".lang");
    const themeBtns = document.querySelectorAll(".theme-btn");
    const portfolioBtns = document.querySelectorAll(".portfolio-btn");

    function changeThemeLight() {

        themeSwitcher.style.setProperty('-webkit-mask-image', "url('./assets/svg/moon.svg')");

        body.style.setProperty('--body-color', '#fffdf7');
        body.style.setProperty('--font-color-main', '#000000');
        sectionTitle.forEach(element => element.style.setProperty('--gold', '#000000'));
        sectionTitle.forEach(element => element.style.setProperty('--body-color', '#fffdf7'));

        headerContainer.style.background = "url('./assets/img/bg2.jpg')";
        heroContainer.style.backgroundImage = "url('./assets/img/bg2.jpg')";
        contactsContainer.style.background = "url('./assets/img/contacts2.jpg')";

        inputs.forEach(element => element.style.backgroundColor = "rgba(255, 255, 255, 0.5)");
        contactTitle.style.color = "#000000";

        languageBtns.forEach(element => element.style.setProperty('text-shadow', '2px 2px 2px #000000'));
        themeBtns.forEach(element => element.style.backgroundColor = "#786a4e");

        portfolioBtns.forEach(element => element.style.borderColor = "#000000");

        flag = 'light';
    }

    function changeThemeDark() {
        themeSwitcher.style.setProperty('-webkit-mask-image', "url('./assets/svg/carbon_sun.svg')");

        body.style.setProperty('--body-color', '#000000');
        body.style.setProperty('--font-color-main', '#FFFFFF');
        sectionTitle.forEach(element => element.style.setProperty('--gold', '#bdae82'));
        sectionTitle.forEach(element => element.style.setProperty('--body-color', '#000000'));

        headerContainer.style.background = "url('./assets/img/bg.jpg')";
        heroContainer.style.backgroundImage = "url('./assets/img/bg.jpg')";
        contactsContainer.style.background = "url('./assets/img/contacts.jpg')";

        inputs.forEach(element => element.style.backgroundColor = "rgba(0, 0, 0, 0.5)");
        themeBtns.forEach(element => element.style.backgroundColor = "#bdae82");
        contactTitle.style.color = "#bdae82";

        themeBtns.forEach(element => element.style.border = "none");

        portfolioBtns.forEach(element => element.style.borderColor = "#bdae82");

        flag = 'dark';

    }


    themeSwitcher.addEventListener('click', () => {
        if (flag === 'dark') {
            changeThemeLight();
        } else {
            changeThemeDark();
        }

    });

}

export default toChangeTheme;