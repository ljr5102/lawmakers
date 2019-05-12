describe('Member', () => {
  it('successfully loads', () => {
    cy.server();
    cy.route('GET', 'https://theunitedstates.io/congress-legislators/legislators-current.json', 'fixture:legislators.json');
    cy.route('GET', 'https://theunitedstates.io/districts/states/OH/shape.geojson', 'fixture:geocoords.json');
    cy.visit('/#/member/B000944');
    cy.contains('Sherrod Brown');
    cy.contains('Senator');
    cy.contains('Ohio');
    cy.contains('Historical Term Data');
    cy.contains('Contact This Congressman');
  });
});
