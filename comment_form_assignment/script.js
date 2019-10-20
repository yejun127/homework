/*
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
       errorfaults += "Please enter your email";
    } if (subject == "") {
       errorfaults += "Please enter your subject";
    } if (message_0 == "") {
       errorfaults += "Please enter your message";
    } if (from !== "" & subject !== "" & message_0 !== "") {
       errorfaults = "Your message has been sent";
      let submission_0 = getSubmission(from, subject, message_0);
      console.log(submission_0)
      contactSubmission[submission_0.from] = submission_0;
      console.log(contactSubmission);
      localStorage.setItem(blogName_0, JSON.stringify(contactSubmission));
    }
    console.log(errorfaults);
    contactDiv.innerHTML = errorfaults;
}
*/






class Comment {
  constructor(name, message) {
    this.comment = name + ": " + message;
  }

  setComment(name, message) {
    this.comment = name + ": " + message;
  }

  getComment(){
    return this.comment;
  }
}

function addComment(list_of_comments, comment) {
    list_of_comments.push(comment);
    return list_of_comments
}

let blogName = document.getElementById("blog_name").innerHTML;
let commentDiv = document.getElementById("list_of_comments");
let comments = [];

if(localStorage.getItem(blogName)) {
    comments = JSON.parse(localStorage.getItem(blogName));
    for(var i=0; i<comments.length; i++){
      commentDiv.innerHTML += "<p>"+comments[i].comment+"</p><br>";
    }
}

commentForm = document.getElementById("commentForm");
commentForm.addEventListener("submit", function(event) {
    let name = commentForm.elements.namedItem("name").value;
    let message = commentForm.elements.namedItem("message").value;
    let comment = new Comment(name, message);
    addComment(comments, comment);
    localStorage.setItem(blogName, JSON.stringify(comments));

    let commentsHtml = "";
    for(var i=0; i<comments.length; i++){
      commentsHtml += "<p>"+comments[i].comment+"</p><br>";
    }
    commentDiv.innerHTML = commentsHtml;
    commentDiv.classList.add("highlight");
    event.preventDefault();
})
