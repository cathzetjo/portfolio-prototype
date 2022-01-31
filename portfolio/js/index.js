function changeClassActive(element, selectorName){
    const allElements = document.querySelectorAll(`.${selectorName}`);
    allElements.forEach(element => element.classList.remove("active"));
    element.classList.add("active");
};