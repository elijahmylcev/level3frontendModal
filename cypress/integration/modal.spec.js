describe('Modal', () => {
  beforeEach(() => {
    cy.visit('https://elijahmylcev.github.io/level3frontendModal/');
  });

  it('should open a modalStandard', () => {
    cy.get('.trigger').click();

    cy.get('#exampleModal').should('have.css', 'display', 'block');
  });
});
