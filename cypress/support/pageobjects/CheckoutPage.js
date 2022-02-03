/// <reference types="Cypress" />

import CheckoutElements from '../elements/CheckoutElements'
const checkoutElements = new CheckoutElements

class CheckoutPage{    
    
    preencheDadosPessoais(pais, seletorEstadoVar, caixaCidadeVar, caixaEndereco1Var, caixaEndereco2Var, caixaCepVar, caixaTelefoneVar){
       
        //Preenche os dados pessoais do cliente
        cy.get(checkoutElements.seletorPais()).select(pais);
        cy.get(checkoutElements.seletorEstado()).select(seletorEstadoVar);
        cy.get(checkoutElements.caixaCidade()).type(caixaCidadeVar);
        cy.get(checkoutElements.caixaEndereco1()).type(caixaEndereco1Var);
        cy.get(checkoutElements.caixaEndereco2()).type(caixaEndereco2Var);
        cy.get(checkoutElements.caixaCep()).type(caixaCepVar);
        cy.get(checkoutElements.caixaTelefone()).type(caixaTelefoneVar);
    }

    botaoAvancar(){
        
        //Clica nos botões de continuar para seleção de pagamento
        cy.wait(3000)
        cy.get(checkoutElements.botaoContinueToShipping()).click({force:true});
        cy.wait(3000)
        cy.get(checkoutElements.botaoContinueToPayment()).click({force:true});
    }

    preencheDadosCartao(seletorTipoCartaoVar, caixaNomeDonoCartaoVar, caixaNumeroCartaoVar, seletorDataExpiraMesVar, seletorDataExpiraAnoVar, caixaCvcCartaoVar){
        
        //Seleciona os parametros de pagamento
        cy.get(checkoutElements.radialCreditCard()).click();
        cy.get(checkoutElements.botaoContinueToPaymentInfo()).click();
        cy.get(checkoutElements.seletorTipoCartao()).select(seletorTipoCartaoVar);
        cy.get(checkoutElements.caixaNomeDonoCartao()).type(caixaNomeDonoCartaoVar);
        cy.get(checkoutElements.caixaNumeroCartao()).type(caixaNumeroCartaoVar);
        cy.get(checkoutElements.seletorDataExpiraMes()).select(seletorDataExpiraMesVar);
        cy.get(checkoutElements.seletorDataExpiraAno()).select(seletorDataExpiraAnoVar);
        cy.get(checkoutElements.caixaCvcCartao()).type(caixaCvcCartaoVar);
    }
    botaoFinalizacao(){
        
        //efetua a finalização de todo processo de compra retornando ao inicio do site
        cy.get(checkoutElements.botaoContinueToConfirmarCompra()).click({force:true});
        cy.wait(3000)
        cy.get(checkoutElements.botaoConfirmarCompra()).click({force:true});
        cy.wait(3000)
        cy.get(checkoutElements.botaoTerminarCompra()).click({force:true});
    }
}
export default CheckoutPage;