/* Create a function with the following characteristics:
Name of Function: getSubmission
Parameters: to, from, subject, message
All parameters are strings
Returns: Object with fields "to, from, subject, message".*/

// let getSubmission = (to, from, subject, message) => {
//     let submission = {to: to, from: from, subject: subject, message: message};
//     return submission;
// }


/*Create a class with the following characteristics:*/

class Comment {
  constructor(name, message) {
    this.comment = name + ":" + message;
  }
  /* sets the name and message of the comment */

  setComment(name, message) {
    this.comment = name + ":" + message;
  }

  getComment(){
    return this.comment;
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
    list_of_comments.push(comment);
    return list_of_comments
}

/* Populate with current Comment */

let commentDiv = document.getElementById("list_of_comments");
let comments = [];
if(localStorage.getItem("curComment")) {
    comments = JSON.parse(localStorage.getItem("curComment"));
    for(var i=0; i<comments.length; i++){
      commentDiv.innerHTML += "<p>"+comments[i].comment+"</p><br>";
    }
}

/* Run code on submit button push */
commentForm = document.getElementById("commentForm");
commentForm.addEventListener("submit", function(event) {
    let name = commentForm.elements.namedItem("name").value;
    let message = commentForm.elements.namedItem("message").value;
    let comment = new Comment(name, message);
    addComment(comments, comment);
    localStorage.setItem("curComment", JSON.stringify(comments));

    /*let commentDiv = document.getElementById("list_of_comments"); */
    let commentsHtml = "";
    for(var i=0; i<comments.length; i++){
      commentsHtml += "<p>"+comments[i].comment+"</p><br>";
    }
    commentDiv.innerHTML = commentsHtml;
    commentDiv.classList.add("highlight");
    event.preventDefault();
})

