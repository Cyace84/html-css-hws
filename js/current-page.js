const href = window.location.href.split('/');
const currentPage = href[href.length - 1];

if (currentPage === "index.html") {
    let currentLink = document.querySelector("#mainLink");
    currentLink.classList.toggle("site-nav__link--current")

} else if (currentPage == "portfolio.html") {
    let currentLink = document.querySelector("#portfolioLink");
    currentLink.classList.toggle("site-nav__link--current")
}