describe('My First Test', () => {
  it('Visits the Kitchen Sink and checks for a title', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('get').click();
    cy.url().should('include', '/commands/querying');
  });
});