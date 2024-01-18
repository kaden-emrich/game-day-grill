var burgerButton = document.getElementById('magic-burger');
var navDiv = document.getElementById('navlist-wrapper');

var navIsExpanded = false;

function toggleNavbar() {
    if(navIsExpanded) {
        navDiv.classList.remove('nav-opened');
        burgerButton.classList.remove('burger-slide-right');
        navDiv.classList.add('nav-closed');
        burgerButton.classList.add('burger-slide-left');
        navIsExpanded = false;
    }
    else {
        navDiv.classList.remove('nav-closed');
        burgerButton.classList.remove('burger-slide-left');
        navDiv.classList.add('nav-opened');
        burgerButton.classList.add('burger-slide-right');
        navIsExpanded = true;
    }
}

burgerButton.addEventListener('click', toggleNavbar);