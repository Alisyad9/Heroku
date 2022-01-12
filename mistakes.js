// Scoping: declare fresh list outside or inside server.get()

server.get("/message", (request, response) => {
  let items = "";
  for (const message of messageList) {
    // items += `<li>${message}</li>`;
    items += `<li>...</li>`;
  }
  const html = `...<ul>${items}</ul>`;

  response.end(html);
});

///problems with using arrays to contain the message typed
/// accessing the wrong object name
///get to now more about the request.body.name; to access the inputs with the form
