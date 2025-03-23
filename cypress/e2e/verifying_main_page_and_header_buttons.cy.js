describe('verificando a página inicial seguindo instruções do exercício', () => {
    it('seguindo as instruções será avaliada a página de principal do AdoPet e os botões header', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('a.header__message').click();
      cy.get('a.header__home').click();
    })
  })

  //<a class="header__home" aria-label="Tela inicial" href="/"></a>