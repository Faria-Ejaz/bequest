/// <reference types="cypress" />

describe("DialogBox", () => {
  beforeEach(() => {
    cy.visit("https://bequest.netlify.app/");
    cy.get('[data-testid="submit-button"]').click();
  });
  it("should open Dialog box", () => {
    cy.get(".MuiDialog-container").should("be.visible");
  });
  it("should have an Address1 field", () => {
    cy.get("#\\:rl\\:").should("have.attr", "name").and("include", "line_1");
  });
  it("should have an Address2 field", () => {
    cy.get("#\\:rm\\:").should("have.attr", "name").and("include", "line_2");
  });
  it("should have an Address3 field", () => {
    cy.get("#\\:rn\\:").should("have.attr", "name").and("include", "line_3");
  });
  it("should have a Town field", () => {
    cy.get('[data-testid="town"]')
      .should("have.attr", "name")
      .and("include", "town");
  });
  it("should have a Postcode field", () => {
    cy.get('[data-testid="postcode"]')
      .should("have.attr", "name")
      .and("include", "postcode");
  });
  it("should have a Country field", () => {
    cy.get(".MuiNativeSelect-select")
      .should("have.attr", "name")
      .and("include", "country");
  });
  it("should add new Address to the Address Book", () => {
    cy.get('[data-testid="postcode"]').type("Postcode");
    cy.get('[data-testid="town"]').type("Town");
    cy.get("#\\:rn\\:").type("Address 3");
    cy.get("#\\:rm\\:").type("Address 2");
    cy.get("#\\:rl\\:").type("Address 1");
    cy.get(".MuiNativeSelect-select").select("Scotland");
    cy.get('.MuiDialogActions-root > [data-testid="submit-button"]').click();
    cy.get('.MuiDataGrid-row > [data-field="line_1"]').should(
      "have.text",
      "Address 1"
    );
  });
});
