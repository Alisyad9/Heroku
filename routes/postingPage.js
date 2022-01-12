const messageList = require("../list");

function get(request, response) {
  const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="icon" href="./Icon:image/to_do_list_icon-icons.com_76974.ico" type="image/ico">
          <link rel="stylesheet" type="text/css" href="./style.css">
          <link rel="stylesheet" type="text/css" href="./posting.css">
          <title>Posting</title>
        </head>
        <body>
          <form method="POST" class="stack-md center width-sm justify-space-between" id="posting-form">
            <!-- // Author -->
            <label for="new-author">User name</label>
            <input type="text" id="new-author" name="newAuthor" placeholder="Your name" required>
  
            <!-- Title -->
            <label for="new-title">Title</label>
            <input type="text" id="new-title" name="newTitle" placeholder="Write a unique post title" required>
  
            <!-- New Message -->
            <label for="new-txt">Message</label>
            <textarea
              id="new-xt"
              name="newTxt" maxlength="100" placeholder="What's on your mind? max length 100 characters"
            required></textarea>
  
            <!--Old Message-->
            <!--<label for="text">Post message</label>
            <input
              type="text"
              id="text"
              name="text"
              placeholder=" please type your message">
            -->
  
            <!--Send Button-->
            <button id="new-send" name="new-send" aria-label="Send post">Send</button>
  
          </form>
        </body>
      </html>
    `;

  response.end(html);
}

function post(request, response) {
  // Access user-submission
  const newSubmission = request.body;

  // Build obj for this post
  const newAuthor = newSubmission.newAuthor;
  const newTitle = newSubmission.newTitle;
  const newMessage = newSubmission.newTxt;

  const newObj = {
    author: newAuthor,
    title: newTitle,
    text: newMessage,
  };
  console.log(newObj);

  // add post-obj to our message-list
  // const label = newTitle;
  // messageList[label] = newSubmission;

  messageList[newTitle] = newObj;

  // redirect
  response.redirect("/message");
}

module.exports = { get, post };
