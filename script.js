
// For IOS devices

var clicked = false;

document.getElementsByClassName("main-container")[0].addEventListener("click", function(){
    if(clicked == false){
        document.getElementsByClassName("after")[0].style.opacity="0.6";
        document.getElementsByClassName("image-context")[0].style.opacity="1";
        clicked = true;
    }else{
        document.getElementsByClassName("after")[0].style.opacity="0";
        document.getElementsByClassName("image-context")[0].style.opacity="0";
        clicked = false; 
    }
});