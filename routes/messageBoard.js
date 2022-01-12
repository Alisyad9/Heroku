const messageList = require("../list");

// see the message of the post
function get(request, response) {
  // Make a list item
  let items = "";
  for (const message of Object.values(messageList)) {
    // items += `<li>${message}</li>`;

    // console.log(message.text);

    items += `
      <div  class="taskMessage">
        <div>
          <div>Title: ${message.title}</div>
          <div>Author: ${message.author}</div>
          <div>${message.text}</div>
        </div>
        <form action="/delete-message" method="POST" style="display: inline;" id="button-form">
        
          <button name="name" value="${message.title}" aria-label="Delete ${message.title}" >
            <img src="https://img.icons8.com/office/16/000000/delete-sign.png">

            <!-- &times; -->
          </button>
        </form>
      </div>
    `;
  }

  // Construct the list
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" type="text/css" href="./style.css">
        <link rel="stylesheet" type="text/css" href="./message.css">
        <link rel="icon" href="./images/to_do_list_icon-icons.com_76974.ico" type="image/ico">
        <title>Best Blogging</title>
    </head>
    <body class="center">
      <h1> message of the day </h1>
    
      <a class="make-block" href="https://mmb-blog.herokuapp.com/"><button>Home</button></a>

      <a class="make-block" href="https://mmb-blog.herokuapp.com/posting"><button>Write a new post</button></a>
      
     <div class="message">
     ${items}
     </div>
      
    </body>
    </html>
  `;

  response.end(html);
}

module.exports = { get };
