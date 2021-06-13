describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Congress Member')
    cy.visit('/member/A000360')
  });
  it('Search member and visit', () => {
    cy.visit('/');
    cy.get('#search-list').type('ted');
    cy.get('mat-row').click();
    cy.get('h1').contains('Member details');
    cy.get('h2').contains('Sen. Ted Cruz');
  });
  it('Should go from member details to home page', () => {
    cy.visit('/member/A000360')
    cy.get('mat-toolbar a').click();
    cy.url().should('include', '/');
  });
});
