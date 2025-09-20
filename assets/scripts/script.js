emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY) // Init EmailJS

const contactForm = document.querySelector(".contact-form");

if(!contactForm) {
    alert("Error. from not found!");
} else {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent page reload

        emailjs.sendForm(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, this)
            .then(() => {
                alert("Message has sent successfully!");
                contactForm.reset(); // Clear Form
            })
            .catch((error) => {
                alert("Unknown error while sending! " + JSON.stringify(error)); // Error alert
            });
    });
}