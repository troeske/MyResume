function sendMail(contactForm) {
    console.log(contactForm.fullname.value);
    console.log(contactForm.emailaddress.value);
    console.log(contactForm.projectsummary.value);
    
    emailjs.send("service_hkaqw0i","template_jmch9w5", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}