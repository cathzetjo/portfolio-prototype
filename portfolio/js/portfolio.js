const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioBtns = document.querySelector('.portfolio-buttons');

function changeImage(event) {
    const clickedElement = event.target;
    if(clickedElement.classList.contains('portfolio-btn')) {
        changeClassActive(clickedElement, 'portfolio-btn');
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${clickedElement.dataset.season}/${index + 1}.jpg`);
    }
}
portfolioBtns.addEventListener('click', changeImage);

