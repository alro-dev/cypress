describe('The Home Page', () => {
    it('when click narco box, name input is narco', () => {
      cy.visit('http://localhost:4200/dashboard') 
      cy.contains('Narco').click(),
      cy.get('input[placeholder="name"]').should('have.value','Narco')
})
  })