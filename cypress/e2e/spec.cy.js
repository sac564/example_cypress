describe('My Second Test', () => {
  it('Visits the Kitchen Sink and checks for a title', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('children').click();
    cy.url().should('include', '/commands/traversal');
  });
});

