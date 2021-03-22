

// describe('My First Test', () => {
//   it('Does not do much!', () => {
//   expect(true).to.equal(true)
//   })
// })


describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
  cy.visit('http://localhost:6006/?path=/story/welcome-ui-input--default')
  // const $li = Cypress.$('#root > div:nth-child(1) > input:nth-child(1)')

  cy.get('#root > div:nth-child(1) > input:nth-child(1)')
  // cy.get('#storybook-explorer-searchfield').click()
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')
})
})
