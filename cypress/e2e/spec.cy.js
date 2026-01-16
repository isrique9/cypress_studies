describe('template spec', () => {
  // Teste de sucesso
  it('Prenchimento do formulário.', () => {
    cy.visit('http://127.0.0.1:8000/iptu-exemption/api/v1/form/3')
    
    // Teste de preenchimento de campos obrigatórios
    cy.get('[name="cpf"]').type('55118922895')
    cy.get('[name="name"]').type('Nome do Caboclo')
    cy.get('[name="birth_date"]').type('01/01/2005')
    cy.get('[name="sus_card"]').type('898001160660001')
    cy.get('[name="rg_rne"]').type('MG1234567')

    cy.get('[name="email"]').type('gustavoexemplo@gmaill.com')
    cy.get('[name="email_confirm"]').type('gustavoexemplo@gmaill.com')

    cy.get('[name="telefone_principal"]').type('11987654321')
    
    // Teste busca por cep automatico
    cy.get('[name="cep"]').type('07790-260')
    
    // Teste clique de anexo e seleção de arquivo
    cy.get('.attachments-container > :nth-child(2)').click()
    
    // Teste de preenchimento de campo oculto opcional
    cy.get('.row > :nth-child(2) > .form-check').click()
    cy.get('[name="spouse"]').type('Nome da Fulana')

    cy.get('.cep-button').click()
    cy.get('#cep_busca_logradouro').type('Tenente')
    cy.get('#btn_buscar_cep').click()
    cy.get(':nth-child(1) > .text-center > .cep-select-checkbox').click()

    cy.get('#chk_sem_numero_container').click()
  })

  // Teste de erro
  it('Prenchimento do formulário com erro.', () => {
    cy.visit('http://127.0.0.1:8000/iptu-exemption/api/v1/form/3')
    
    // Teste de preenchimento de campos obrigatórios
    cy.get('[name="cpf"]').type('123456789')
    cy.get('[name="name"]').type('N P')
    cy.get('[name="birth_date"]').type('01/01/1830')
    cy.get('[name="sus_card"]').type('012100564633121')

    cy.get('[name="email"]').type('pedraotesteerrado11092001@gmaill.com')
    cy.get('[name="email_confirm"]').type('pedraotesteerrado@gmaill.com')

    cy.get('[name="telefone_principal"]').type('11472')
    
    // Teste busca por cep automatico
    cy.get('[name="cep"]').type('99999-999')
    
    // Teste clique de anexo e seleção de arquivo
    cy.get('.attachments-container > :nth-child(2)').click()
    
    // Teste de preenchimento de campo oculto opcional
    cy.get('.row > :nth-child(2) > .form-check').click()
  })
})