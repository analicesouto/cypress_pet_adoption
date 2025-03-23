describe('verificando a home do site, segundo instruções do exercício', () => {
    it('seguindo as instruções será avaliada a home do AdoPet e os seus botões', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('a', 'Fazer login').click();
        cy.get('input[name="email"]').type('analicetestes@gmail.com');
        cy.get('input[name="password"]').type('aNNa4148@@');
        cy.contains('button', 'Entrar').click();
        cy.contains('a', 'Falar com responsável').click();
    })
  })



  
