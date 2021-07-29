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

  it('should be able to chain multiple operations together', () => {
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })

  it('should be able to display results as positive numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '21');
  })

  it('should be able to display results as negative numbers', () => {
    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2');
  })

  it('should be able to display results as decimals ', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1.25');
  })

  it('should be able to display very large numbers ', () => {
    cy.get('#number4').click();
    cy.get('#number1').click();
    cy.get('#number8').click();
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number6').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '29313574290');
  })

  it('should display an error message when user attempts to divide by zero', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click()
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error: Cannot divide by zero');
  })
})