/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  if (!document.getElementsByClassName("nav-items")[0].classList.contains("nav-items-opened")) {

  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("nav-bar")[0].style.top = "10px";
  } else {
    document.getElementsByClassName("nav-bar")[0].style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
}

document.getElementsByClassName("menu-button-container")[0].addEventListener("click", function(){
  document.getElementsByClassName("menu-button-container")[0].classList.toggle("change");
});


var navButton = document.getElementsByClassName("menu-button-container")[0];
var navItems = document.getElementsByClassName("nav-items")[0]

navButton.addEventListener("click", function(){
  navItems.classList.toggle("nav-items-opened");
});
