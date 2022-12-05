let header = document.querySelector(".header");
if (header) {
    headerLink = header.querySelectorAll(".header-nav__item");
    if (headerLink.length > 1) {
        headerLink[1].classList.add('.header-nav__item--extends');
    }
}