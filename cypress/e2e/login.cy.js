// Login Test
// - Should be on home page
// - Should go to login page when login button clicked
// - Should show 'Error: "email" is not allowed to be empty' when email empty
// - Should show 'Error: "password" is not allowed to be empty' when password empty
// - Should show 'Error: email or password is wrong' when email or password is wrong
// - Should display home page when email and password are correct

describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should be on home page', () => {
    cy.get('img[alt="Logo Votrum"]').should('be.visible');
    cy.get('#login-link').should('be.visible');
    cy.contains('New Thread').should('be.visible').and('be.disabled');
  });

  it('Should go to login page when login button clicked', () => {
    cy.get('#login-link').should('be.visible').click();
    cy.contains('Log In').should('be.visible');
    cy.contains('Anda harus melakukan login untuk membuat Thread').should('be.visible');
  });

  it("Should show 'Error: \"email\" is not allowed to be empty' when email empty", () => {
    cy.get('#login-link').should('be.visible').click();
    cy.get('#submitLogin').should('be.visible').click();
    cy.contains('Error: "email" is not allowed to be empty').should('be.visible');
  });

  it("Should show 'Error: \"password\" is not allowed to be empty' when password empty", () => {
    cy.get('#login-link').should('be.visible').click();
    cy.get('#emailLogin').should('be.visible').type('jael@gmail.com');

    cy.get('#submitLogin').should('be.visible').click();
    cy.contains('Error: "password" is not allowed to be empty').should('be.visible');
  });

  it("Should show 'Error: email or password is wrong' when email or password is wrong", () => {
    cy.get('#login-link').should('be.visible').click();
    cy.get('#emailLogin').should('be.visible').type('jael@gmail.com');
    cy.get('#passLogin').should('be.visible').type('zuhahuhauha');

    cy.get('#submitLogin').should('be.visible').click();
    cy.contains('Error: email or password is wrong').should('be.visible');
  });

  it('Should display home page when email and password are correct', () => {
    cy.get('#login-link').should('be.visible').click();
    cy.get('#emailLogin').should('be.visible').type('jael@gmail.com');
    cy.get('#passLogin').should('be.visible').type('qwerty');

    cy.get('#submitLogin').should('be.visible').click();
    cy.contains('New Thread').should('be.visible').and('be.enabled');
  });
});
