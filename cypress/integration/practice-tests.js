// Practice Test
it("can run a test", () => {
  assert.equal(1, 1);
});

it("Can navigate to posting page", () => {
  cy.visit("http://localhost:4444/");
  cy.contains("Write").click();
  cy.url().should("include", "/posting");
});

it("Can navigate to message page", () => {
  cy.visit("http://localhost:4444/");
  cy.contains("posts").click();
  cy.url().should("include", "/message");
});

it("Can write & send a post", () => {
  cy.visit("http://localhost:4444/posting");
  cy.get("#posting-form").find("input[name='newAuthor']").type("MO_MI_BA");
  cy.get("#posting-form").find("input[name='newTitle']").type("MO_MI_BA");
  cy.get("#posting-form").find("textarea[name='newTxt']").type("MO_MI_BA");
  cy.contains("Send").click();
  cy.url().should("include", "/message");
});

it("information in the message page", () => {
  cy.get("#button-form").find("button[name='name']").click();
});

// input names: name="newAuthor", name="newTitle", name="newTxt"
// Our posting form: id="posting-form"
