describe('Dashboard Home', () => {
  it('carga correctamente la página principal', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Dashboard');
  });
});