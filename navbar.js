/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  if (!document.getElementsByClassName("nav-items")[0].classList.contains("nav-items-width")) {

  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("nav-bar")[0].style.top = "0";
  } else {
    document.getElementsByClassName("nav-bar")[0].style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
}



var navButton = document.getElementsByClassName("nav-side-open")[0];
var navItems = document.getElementsByClassName("nav-items")[0]

navButton.addEventListener("click", function(){
  navItems.classList.toggle("nav-items-width");
});


window.onresize = function(){
  if (window.innerWidth >= 1000) {
    navItems.classList.remove("nav-items-width");
  }
}