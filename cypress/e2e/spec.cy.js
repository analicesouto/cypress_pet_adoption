describe('template spec', () => {
  it('  ', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro')
    cy.get('input[name="nome"]').type('Analice Souto');
    cy.get('input[name="email"]').type('analicetestes@gmail.com');
    cy.get('input[name="password"]').type('aNNa4148@@');
    cy.get('input[name="confirm_password"]').type('aNNa4148@@');
    cy.contains('button','Cadastrar').click();
  })
})
