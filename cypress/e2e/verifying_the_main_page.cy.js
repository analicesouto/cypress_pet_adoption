describe('verificando a página inicial seguindo instruções do exercício', () => {
    it('seguindo as instruções será avaliada a página de principal do AdoPet e o botão ‘Ver pets disponíveis para adoção', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.contains('a','Ver pets disponíveis para adoção').click();
    })
  })
  
