/* /* /* global Given, Then, When */

import HomePage from '../pageobjects/HomePage'
import ProdutosPage from '../pageobjects/ProdutosPage'
import CarrinhoPage from '../pageobjects/CarrinhoPage'
import CheckoutPage from '../pageobjects/CheckoutPage'
import LoginPage from '../pageobjects/LoginPage'

const homePage = new HomePage
const produtosPage = new ProdutosPage
const carrinhoPage = new CarrinhoPage
const checkoutPage = new CheckoutPage
const loginPage = new LoginPage

Given("que o usuario acessa o site", () => {
    homePage.acessarSite();
    homePage.validacaoHome();
})
And("digita seu {} e {} cadastrados", (email, senha) =>{
    loginPage.clicarBotaoLogin();
    loginPage.preencherDados(email, senha);
    loginPage.loginOK();
})
And("vai ate o produto e adiciona ao carrinho", () =>{
    produtosPage.clickCategoria();
    produtosPage.adicionarProdutos();
})
When("realizar o checkout da compra", () =>{
    carrinhoPage.clickBotaoCarrinho();
    carrinhoPage.concluirCarrinho();
})
Then("ele então deve concluir a compra impecavelmente {} {} {} {} {} {}", (seletorTipoCartaoVar, caixaNomeDonoCartaoVar, caixaNumeroCartaoVar, seletorDataExpiraMesVar, seletorDataExpiraAnoVar, caixaCvcCartaoVar) => {
    checkoutPage.botaoAvancar();
    checkoutPage.preencheDadosCartao(seletorTipoCartaoVar, caixaNomeDonoCartaoVar, caixaNumeroCartaoVar, seletorDataExpiraMesVar, seletorDataExpiraAnoVar, caixaCvcCartaoVar);
    checkoutPage.botaoFinalizacao();
    loginPage.verificaBotaoLogout();
})
And("sair da plataforma", () =>{
    loginPage.clicarBotaoLogout();
    loginPage.verificaBotaoLogin();


})