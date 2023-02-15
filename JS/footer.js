const copyIcon = document.getElementsByClassName("copy-icon");
const contactItem = document.getElementsByClassName("contact-item");
const contactText = document.getElementsByClassName("contact-text");

for(var i = 0; i < copyIcon.length; i++) {
    copyIconButton(i);
}

function copyIconButton(index) {
    copyIcon[index].addEventListener("click", () => {
        navigator.clipboard.writeText(contactText[index].textContent.trim());    
    })
}



