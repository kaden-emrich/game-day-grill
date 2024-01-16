var burgerButton = document.getElementById('magic-burger');
var navDiv = document.getElementById('magic-hamburger-nav');

var navIsExpanded = false;

function toggleNavbar() {
    if(navIsExpanded) {
        navDiv.classList.add('nav-closed');
        navDiv.classList.remove('nav-opened');
        navIsExpanded = false;
    }
    else {
        navDiv.classList.add('nav-opened');
        navDiv.classList.remove('nav-closed');
        navIsExpanded = true;
    }
}

burgerButton.addEventListener('click', toggleNavbar);