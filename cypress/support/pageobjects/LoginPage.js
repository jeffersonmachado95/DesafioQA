/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements


class LoginPage {

    // Clica no botão que acessa a página de login do site
    clicarBotaoLogin() {
        cy.get(loginElements.botaoLogin()).click();
    }
    //Verifica se o user está deslogado
    verificaBotaoLogin() {
        cy.get(loginElements.botaoLogin()).should("be.visible")
    }

    //compara botão logout para verificar se está logado
    clicarBotaoLogout() {
        cy.get(loginElements.botaoLogout()).click();
    }
    //verifica se o user está logado
    verificaBotaoLogout() {
        cy.get(loginElements.botaoLogout()).should("be.visible")
    }

    // Preenche os dados de login.
    preencherDados(email, senha) {
        cy.get(loginElements.caixaEmail()).type(email)
        cy.get(loginElements.caixaSenha()).type(senha)
    }
    //Conclui login
    loginOK(){
        cy.get('form > .buttons > .button-1').click()
    }
}
export default LoginPage;