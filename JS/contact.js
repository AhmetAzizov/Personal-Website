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


function sendEmail() {
    var name = document.querySelector(".form-name").value;
    var email = document.querySelector(".form-email").value;
    var message = document.querySelector(".form-message").value;

    Email.send({
        SecureToken : "72ce78b0-f0ee-4d3c-b3a0-d41bc5e8fdf5",
        To : 'ahmet.azizov@hotmail.com',
        From : "ahmet.azizov@gmail.com",
        Subject : "Mail sent by: " + email,
        Body : "Name: " + name + "<br> Email: " + email + "<br> Message: " + message
    }).then(
    message => alert("Message Sent Successfully")
    );

}



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));