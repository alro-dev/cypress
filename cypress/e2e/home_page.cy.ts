describe("The Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/dashboard");
  });

  it("when click narco box, name input is narco", () => {
    cy.contains("Narco").click(),
      cy.get('input[placeholder="name"]').should("have.value", "Narco");
  });

  it("when click narco box, id input is 12", () => {
    cy.contains("Narco").click(),
      cy.get("label").contains("id").parent().should("have.text", "id: 12");
  });

  it("check status code", () => {
    cy.request('GET', "/").then(
  (response) => {
    expect(response.status).to.be.eql(200);
  }
)
      });

});



