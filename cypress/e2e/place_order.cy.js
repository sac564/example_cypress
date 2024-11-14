describe('testing order placement', () => {
    it('passes', () => {
        cy.visit('https://example.cypress.io'),
        cy.contains('closest').click(),
        cy.url().should('include', '/commands/traversal')
    })
})