// document.addEventListener("DOMContentLoaded", function () {});

// Start of Fixed Scroll Bar Animation
const navBar = document.querySelector("#nav_bar");
let navBarTop = navBar.offsetTop;

const fixedNavBar = () => {
  if (window.scrollY > navBarTop) {
    navBar.classList.add("fixedScroll");
  } else {
    navBar.classList.remove("fixedScroll");
  }
};
window.addEventListener("scroll", fixedNavBar);
// End of Fixed Scroll Bar Animation
