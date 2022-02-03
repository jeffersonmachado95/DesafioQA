/* /* /* global Given, Then, When */

import RegistroPage from '../pageobjects/RegistroPage'
import HomePage from '../pageobjects/HomePage'
import ProdutosPage from '../pageobjects/ProdutosPage'
import CarrinhoPage from '../pageobjects/CarrinhoPage'
import CheckoutPage from '../pageobjects/CheckoutPage'
import LoginPage from '../pageobjects/LoginPage'

const homePage = new HomePage
const registroPage = new RegistroPage
const produtosPage = new ProdutosPage
const carrinhoPage = new CarrinhoPage
const checkoutPage = new CheckoutPage
const loginPage = new LoginPage

Given("que o usuario acessa o site", () => {
    homePage.acessarSite();
    homePage.validacaoHome();
})
And("realiza o registro {} {} {} {} {} {} {} {}", (username, lastname, dia, mes, ano, email, companhia, senha) => {
    registroPage.clicarBotaoRegistro();
    registroPage.validacaoPagRegistro();
    registroPage.dadosRegistro(username, lastname, dia, mes, ano, email, companhia, senha);
    registroPage.concluirRegistro();
})
And("vai ate o produto desejado e adiciona ao carrinho", () =>{
    produtosPage.clickCategoria();
    produtosPage.adicionarProdutos();
})
When("realizar o checkout das compras", () =>{
    carrinhoPage.clickBotaoCarrinho();
    carrinhoPage.validarCarrinho();
    carrinhoPage.concluirCarrinho();
})
Then("ele então deve concluir a compra com sucesso {} {} {} {} {} {} {} {} {} {} {} {} {}", (pais, seletorEstadoVar, caixaCidadeVar, caixaEndereco1Var, caixaEndereco2Var, caixaCepVar, caixaTelefoneVar, seletorTipoCartaoVar, caixaNomeDonoCartaoVar, caixaNumeroCartaoVar, seletorDataExpiraMesVar, seletorDataExpiraAnoVar, caixaCvcCartaoVar) => {
    checkoutPage.preencheDadosPessoais(pais, seletorEstadoVar, caixaCidadeVar, caixaEndereco1Var, caixaEndereco2Var, caixaCepVar, caixaTelefoneVar);
    checkoutPage.botaoAvancar();
    checkoutPage.preencheDadosCartao(seletorTipoCartaoVar, caixaNomeDonoCartaoVar, caixaNumeroCartaoVar, seletorDataExpiraMesVar, seletorDataExpiraAnoVar, caixaCvcCartaoVar);       
    checkoutPage.botaoFinalizacao();
})
And("deslogar da plataforma", () =>{
    loginPage.verificaBotaoLogout()
    loginPage.clicarBotaoLogout();
    loginPage.verificaBotaoLogin();
})