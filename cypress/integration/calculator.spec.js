describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display when number buttons are pressed', () => {
    cy.get('#number4').click();
    cy.get('#number1').click();
    cy.get('#number8').click();
    cy.get('.display').should('contain', '418');
  })

  it('should update the display when arithmetical operations are used', () => {
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '40');
  })
})