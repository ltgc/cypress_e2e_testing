describe('I can go to the page', () => {
  it('opens the page', () => {
    cy.login('lchow')
    cy.goToOrderDashboard('70606443')
  })
})