//Classe que contém todos os elementos referente a página de checkout.

class CheckoutElements{
    
    //Elementos dos dados pessoais
    seletorPais = () => {return '#BillingNewAddress_CountryId'};
    seletorEstado = () => {return '#BillingNewAddress_StateProvinceId'};
    caixaCidade = () => {return '#BillingNewAddress_City'};
    caixaEndereco1 = () => {return '#BillingNewAddress_Address1'};
    caixaEndereco2 = () => {return '#BillingNewAddress_Address2'};
    caixaCep = () => {return '#BillingNewAddress_ZipPostalCode'};
    caixaTelefone = () => {return '#BillingNewAddress_PhoneNumber'};
    
    //botões para avançar até seleção de metodo de pagamento
    botaoContinueToShipping = () => {return '#billing-buttons-container > .new-address-next-step-button'};
    botaoContinueToPayment = () => {return '#shipping-method-buttons-container > .button-1'};
    
    //preenchimento dos dados do método de pagamento
    radialCreditCard = () => {return '#paymentmethod_1'};
    botaoContinueToPaymentInfo = () => {return '#payment-method-buttons-container > .button-1'};
    seletorTipoCartao = () => {return '#CreditCardType'};
    caixaNomeDonoCartao = () => {return '#CardholderName'};
    caixaNumeroCartao = () => {return '#CardNumber'};
    seletorDataExpiraMes = () => {return '#ExpireMonth'};
    seletorDataExpiraAno = () => {return '#ExpireYear'};
    caixaCvcCartao = () => {return '#CardCode'};
    
    //Botões de finalização do processo de compra
    botaoContinueToConfirmarCompra = () => {return '#payment-info-buttons-container > .button-1'};
    botaoConfirmarCompra = () => {return '#confirm-order-buttons-container > .button-1'};
    botaoTerminarCompra = () => {return 'body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body.checkout-data > div > div.buttons > button'};
}
export default CheckoutElements;