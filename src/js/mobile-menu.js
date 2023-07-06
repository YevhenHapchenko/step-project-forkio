const menu = document.querySelector('.header__menu');
const menuButton = document.querySelector('.header__menu-button');
const menuIcon = document.querySelector('#open-icon');

function changeIconToClose() {
    if (menuIcon.src === "dist/imgs/header/menu-icon.png") {
        menuIcon.src = "dist/imgs/header/close-icon.png";
        console.log(menuIcon.src)
    }
}

function changeIconToBurger() {
    if (menuIcon.src === "dist/imgs/header/close-icon.png") {
        menuIcon.src = "dist/imgs/header/menu-icon.png";
        console.log(menuIcon.src)
    }
}

menuButton.addEventListener('click', function(event) {
    if (!menu.classList.contains('header__menu--hidden')) {
        menu.classList.toggle('header__menu--hidden');
        changeIconToBurger();
    }
    else {
        menu.classList.toggle('header__menu--hidden');
        changeIconToClose();
    }
})

document.addEventListener('click', function(event) {
    if (event.target.className !== 'header__menu-item' && event.target.className !== 'header__menu-button' && event.target.className !== 'header__menu-icon') {
        menu.classList.add('header__menu--hidden');
        changeIconToBurger();
    }
})