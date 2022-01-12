const messageList = require("../list");

function get(request, response) {
  const html = `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
         
          <link rel="stylesheet" type="text/css" href="./style.css">
          <link rel="stylesheet" type="text/css" href="./main.css">
          <link rel="icon" href="./images/to_do_list_icon-icons.com_76974.ico" type="image/ico">
  
          <title>Home</title>
        </head>
  
  
  
        <body class = "center center-text" >
        <h1>Welcome to mmB Blogging</h1>
  
        
        
        <section >
        <p><button> <a href="https://mmb-blog.herokuapp.com/posting">Write</a> </button> a post</p>
  
        <p>Read all blog <button> <a href="https://mmb-blog.herokuapp.com/message">posts</a> </button></p>
        
        </section>
        
        
        
        </body>
        </html>
        `;

  response.end(html);
}

module.exports = { get };

// Try getting message board onto main page
//<iframe src="/message" name="iframe_message_board" title="Iframe Message Board"></iframe>;

// see the message of the post
