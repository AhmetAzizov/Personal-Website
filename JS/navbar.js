/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var wrapper = document.getElementsByClassName("page-wrapper")[0];
var navBar = document.getElementsByClassName("nav-bar")[0];

var prevScrollpos = wrapper.scrollTop;

wrapper.onscroll = function () {
  if (
    !document
      .getElementsByClassName("nav-items")[0]
      .classList.contains("nav-items-opened")
  ) {
    var currentScrollPos = wrapper.scrollTop;
    if (prevScrollpos > currentScrollPos) {
      navBar.classList.remove("nav-bar-closed");
    } else {
      navBar.classList.add("nav-bar-closed");
    }

    if (currentScrollPos <= 0) {
      navBar.classList.remove("nav-bar-closed");
    }

    prevScrollpos = currentScrollPos;
  }
};
// ------------------------------------------------------------------------------------------

document
  .getElementsByClassName("menu-button-container")[0]
  .addEventListener("click", function () {
    document
      .getElementsByClassName("menu-button-container")[0]
      .classList.toggle("change");
  });

var navButton = document.getElementsByClassName("menu-button-container")[0];
var navItems = document.getElementsByClassName("nav-items")[0];

navButton.addEventListener("click", function () {
  navItems.classList.toggle("nav-items-opened");
});
