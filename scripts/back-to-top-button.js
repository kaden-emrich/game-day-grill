var backToTopButton = document.getElementById("back-to-top");

var goingToTop = false;

if(window.scrollY == 0) {
    backToTopButton.classList.add("back-to-top-hidden");
}
else {
    backToTopButton.classList.remove("back-to-top-hidden");
}

document.addEventListener("scroll", () => {
    if(goingToTop || window.scrollY == 0) {
        backToTopButton.classList.add("back-to-top-hidden");
    }
    else {
        backToTopButton.classList.remove("back-to-top-hidden");
    }
});

backToTopButton.onclick = () => {
    goingToTop = true;
    setTimeout(() => goingToTop = false, 1000);
    backToTopButton.classList.add("back-to-top-hidden");
}