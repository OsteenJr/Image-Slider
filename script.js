const scrollContainer = document.querySelector('.gallery');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

scrollContainer.addEventListener('wheel', (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
});

nextBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 900,
        behavior: 'smooth'
    });
});
prevBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -900,
        behavior: 'smooth'
    });
});