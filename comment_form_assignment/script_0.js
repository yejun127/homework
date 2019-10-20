let getSubmission = (from, subject, message) => {
     let submission = {from: from, subject: subject, message: message};
    return submission;
}

let contactSubmission = {}
let blogName_0 = document.getElementById("blog_name_0").innerHTML
let contactDiv = document.getElementById("contact_message");


function formXX(event) {
    event.preventDefault();
    let errorfaults = []
    let from = contactForm.elements.namedItem("from").value;
    let subject = contactForm.elements.namedItem("subject").value;
    let message_0 = contactForm.elements.namedItem("message").value;

    if (from == "") {
       errorfaults += "Please enter your email.<br>";
    } if (subject == "") {
       errorfaults += "Please enter your subject.<br>";
    } if (message_0 == "") {
       errorfaults += "Please enter your message.";
    } if (from !== "" & subject !== "" & message_0 !== "") {
       errorfaults = "Your message has been sent!";
      let submission_0 = getSubmission(from, subject, message_0);
      console.log(submission_0)
      contactSubmission[submission_0.from] = submission_0;
      console.log(contactSubmission);
      localStorage.setItem(blogName_0, JSON.stringify(contactSubmission));
    }
    console.log(errorfaults);
    contactDiv.innerHTML = errorfaults;
}
