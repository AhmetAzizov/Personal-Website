
// For IOS devices

if(screen.availHeight > screen.availWidth){
    var clicked = false;

    for(var i = 0; i < 11; i++){
    imageContainerListener(i);
    }

    function imageContainerListener(i){
        document.getElementsByClassName("main-container")[i].addEventListener("click", function(){
            if(clicked == false){
                document.getElementsByClassName("after")[i].style.opacity="0.6";
                document.getElementsByClassName("image-context")[i].style.opacity="1";
                clicked = true;
            }else{
                document.getElementsByClassName("after")[i].style.opacity="0";
                document.getElementsByClassName("image-context")[i].style.opacity="0";
                clicked = false; 
            }    });
        
    }
}


// /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;

// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementsByClassName("nav-bar")[0].style.top = "0";
//     console.log("normal");
//   } else {
//     document.getElementsByClassName("nav-bar")[0].style.top = "-100px";
//     console.log("not normal");
//   }
//   prevScrollpos = currentScrollPos;
// }

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarasdfdsf").style.height = "100px";
    console.log("normal");
  } else {
    document.getElementById("navbar").style.height = "0px";
    console.log("not normal");
  }
  prevScrollpos = currentScrollPos;
}

console.log(scrollX);