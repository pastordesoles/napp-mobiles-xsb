describe("Given the Napp Mobiles page", () => {
  describe("When the user enters and adds a phone to the cart", () => {
    it("Then it should be able to click on Home and go back to the main page", () => {
      cy.visit("/");
      cy.findByText("Acer - Iconia Talk S").click();
      cy.url().should("include", "/phone");
      cy.findByRole("button").click();
      cy.findByRole("heading").click();
      cy.findByText("Acer - Iconia Talk S");
    });
  });
});
