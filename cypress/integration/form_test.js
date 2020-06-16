describe('testing our inputs', function(){
    beforeEach(function(){cy.visit('http://localhost:3001/pizza')
})
it('tests name input', function() {
    cy.get('[data-cy="name"]')
      .type('Chanis Torres')
      .should('have.value', 'Chanis Torres')
})
it('tests checkbox input 1', function() {
    cy.get("[data-cy='checkbox1']")
      .check()
      .should('be.checked')
})

it('tests checkbox input 2', function() {
    cy.get("[data-cy='checkbox2']")
      .check()
      .should('be.checked')
})

it('tests checkbox input 3', function() {
    cy.get("[data-cy='checkbox3']")
      .check()
      .should('be.checked')
})

it('tests checkbox input 4', function() {
    cy.get("[data-cy='checkbox4']")
      .check()
      .should('be.checked')
})

it('tests checkbox input 5', function() {
    cy.get("[data-cy='checkbox5']")
      .check()
      .should('be.checked')
})

it('tests checkbox input 6', function() {
    cy.get("[data-cy='checkbox6']")
      .check()
      .should('be.checked')
})

it('tests checkbox input 7', function() {
    cy.get("[data-cy='checkbox7']")
      .check()
      .should('be.checked')
})

it('tests submit', function() {
    cy.get("[data-cy='submit']")
      .click()
})

})