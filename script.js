
// For IOS devices

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