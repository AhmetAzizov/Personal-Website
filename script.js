
// For IOS devices

if(screen.availHeight > screen.availWidth){
    var clicked = false;

    for(var i = 0; i < 9; i++){
    imageContainerListener(i);
    }

    function imageContainerListener(i){
        document.getElementsByClassName("main-container")[i].addEventListener("click", function(){
          for(var a = 0; a < 9; a++){
                document.getElementsByClassName("after")[a].style.opacity="0";
                document.getElementsByClassName("after")[a].style.visibility="hidden";
                document.getElementsByClassName("image-context")[a].style.opacity="0";
            }

            // if(clicked == false){
                document.getElementsByClassName("after")[i].style.opacity="0.6";
                document.getElementsByClassName("after")[i].style.visibility="visible";
                document.getElementsByClassName("image-context")[i].style.opacity="1";
                // clicked = true;
            // }else{
            //     document.getElementsByClassName("after")[i].style.opacity="0";
            //     document.getElementsByClassName("after")[i].style.visibility="hidden";
            //     document.getElementsByClassName("image-context")[i].style.opacity="0";
            //     clicked = false; 
            // }    
          });
        
    }
}


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("nav-bar")[0].style.top = "0";
    // document.getElementsByClassName("nav-items")[0].style.top = "var(--nav-bar-height)";
    console.log("normal");
  } else {
    document.getElementsByClassName("nav-bar")[0].style.top = "-100px";
    // document.getElementsByClassName("nav-items")[0].style.top = "calc(var(--nav-bar-height))";
    // document.getElementsByClassName("nav-items")[0].style.height = "100vh";
    console.log("not normal");
  }
  prevScrollpos = currentScrollPos;
}




var navButton = document.getElementsByClassName("nav-side-open")[0];
var navItems = document.getElementsByClassName("nav-items")[0]

navButton.addEventListener("click", function(){
  navItems.classList.toggle("nav-items-width");
});