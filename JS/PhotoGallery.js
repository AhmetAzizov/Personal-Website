
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

