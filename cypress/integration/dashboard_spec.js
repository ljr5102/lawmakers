describe('Dashboard', () => {
  it('successfully loads', () => {
    cy.server();
    cy.route('GET', 'https://theunitedstates.io/congress-legislators/legislators-current.json', 'fixture:legislators.json');
    cy.visit('/');
    cy.contains('Dashboard');
    cy.get('#address-search').should('have.attr', 'placeholder', 'Search By Address');
    cy.get('#name-search').should('have.attr', 'placeholder', 'Search By Name');
  });

  it('shows members that match name entered in search', () => {
    cy.server();
    cy.route('GET', 'https://theunitedstates.io/congress-legislators/legislators-current.json', 'fixture:legislators.json');
    cy.visit('/');
    cy.get('#name-search').type('sherrod');
    cy.contains('Sherrod Brown').and('be.visible');
    cy.get('.ct-name').should('exist');
  });

  it('filters out members who do not match name entered in search', () => {
    cy.server();
    cy.route('GET', 'https://theunitedstates.io/congress-legislators/legislators-current.json', 'fixture:legislators.json');
    cy.visit('/');
    cy.get('#name-search').type('bob');
    cy.get('.ct-name').should('not.exist');
  });
});
