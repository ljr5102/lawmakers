Cypress.on('window:before:load', (win) => {
  delete win.fetch
});

describe('Dashboard', () => {
  it('successfully loads', () => {
    cy.server();
    cy.route('GET', 'https://theunitedstates.io/congress-legislators/legislators-current.json', []);
    cy.visit('/');
    cy.contains('Dashboard');
    cy.get('#searchTextField').should('have.attr', 'placeholder', 'Search By Address');
  });
});
