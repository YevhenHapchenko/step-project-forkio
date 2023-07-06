const hamb = document.querySelector(".header__top-line-button");
const menu = document.querySelector('.header__menu');

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    hamb.classList.toggle("active");
    menu.classList.toggle('header__menu--hidden');
}

const links = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
  });

function closeOnClick() {
    hamb.classList.remove("active");
    menu.classList.remove('header__menu--hidden');
}