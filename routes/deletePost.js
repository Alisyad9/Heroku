const messageList = require("../list");
// const bodyParser = express.urlencoded({ extended: false });

function post(request, response) {
  //we are taking button -> name/value -> get the ${message.title}
  const textToDelete = request.body.name;
  console.log(textToDelete);
  // console.log(typeof textToDelete);

  delete messageList[textToDelete];

  response.redirect("/message");
}

module.exports = { post };
