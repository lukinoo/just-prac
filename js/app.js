const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-links-open');
    burger.classList.toggle('burger-line');
})