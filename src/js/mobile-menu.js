const hamb = document.querySelector(".header__top-line-button");
const menu = document.querySelector('.header__menu');

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    hamb.classList.toggle("active");
    menu.classList.toggle('header__menu--hidden');
}