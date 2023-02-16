const contactCopyIcon = document.getElementsByClassName("contact-copy");
const contactContent = document.getElementsByClassName("contact-content");

for(var i = 0; i < copyIcon.length; i++) {
    copyIconButton(i);
}


function copyIconButton(index) {
    contactCopyIcon[index].addEventListener("click", () => {
        navigator.clipboard.writeText(contactContent[index].textContent.trim());    
    })
}



