describe('template spec', () => {
  it('Input nome preenchido', () => {
    cy.visit('http://127.0.0.1:8000/iptu-exemption/api/v1/form/1')
    cy.get('[name="sus_card"]').type('12345678900')
    cy.get('[name="rg_rne"]').type('MG1234567')
    cy.get('.row > :nth-child(2) > .form-check').click()
    cy.get('[name="spouse"]').type('Nome da Fulana')
    cy.get('.attachments-container > :nth-child(2)').click()
  })
})