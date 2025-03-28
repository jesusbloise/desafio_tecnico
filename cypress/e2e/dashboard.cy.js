describe('Dashboard Flow', () => {
    it('Carga la página y cambia el filtro a 7D', () => {
      cy.visit('http://localhost:3000');
      cy.contains('Selecciona un período:');
      cy.contains('7D').click();
      cy.contains('Exportar tabla').should('exist');
    });
  
    it('Cambia a modo Pulso y verifica contenido', () => {
      cy.visit('http://localhost:3000');
      cy.contains('Pulso').click();
      cy.contains('Dinero');
    });
  });
  