describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should be on home page', () => {
    cy.get('img[alt="Logo Votrum"]').should('be.visible');
    cy.contains('New Thread').should('be.visible');
    cy.contains('New Thread').should('be.disabled');
  });
});
