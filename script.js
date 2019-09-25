/* Create a function with the following characteristics:
Name of Function: getSubmission
Parameters: to, from, subject, message
All parameters are strings
Returns: Object with fields "to, from, subject, message".*/

let getSubmission = (to, from, subject, message) => {
    let submission = {to: to, from: from, subject: subject, message: message};
    return submission;
  }


/*Create a class with the following characteristics:*/

class Comment {
  constructor(name, message) {
    this.name = name;
    this.message = message;
  }
  /* sets the name and message of the comment */


  setName(name) {
    this.name = name;
  }
  /* sets the name instance variable */

  getName() {
    return this.name;
  }
  /* returns the name instance variable */


  setMessage(message) {
    this.message = message;
  }
  /* sets the message instance variable */

  getMessage() {
    return this.message;
  }
}
  /* returns the message instance variable */


/* Name of Function: addComment
Parameters: list_of_comments, comment
list_of_comments is an array of values with type Comment, comment is a parameter of type Comment
Returns: list_of_comments
AddComment should add comment to list_of_comments. It should add the new comment to the end of the list_of_comments
*/

function addComment(list_of_comments, comment) {
    list_of_comments[list_of_comments.length] = comment
    return list_of_comments
}

/* Populate with current Comment */
let commentDiv = document.getElementById("list_of_comments");

if (localStorage.curComment != null) {
    commentDiv.innerHTML = localStorage.curComment;
}

/* Run code on submit button push */
commentForm = document.getElementById("commentForm");
commentForm.addEventListener("submit", function(event) {
    let name = commentForm.elements.namedItem("name").value;
    let message = commentForm.elements.namedItem("message").value;
    console.log("name");

    localStorage.curComment = name + ": " + message;

    /*let commentDiv = document.getElementById("list_of_comments"); */
    commentDiv.innerHTML = localStorage.curComment;
    commentDiv.classList.add("highlight");

    /* This stops the usual function of "submit" which is to send data to another server */
    event.preventDefault();
})

commentForm = document.getElementById("list_of_comments");
commentForm.addEventListener("click", function(event) {
    commentDiv = null;
})
