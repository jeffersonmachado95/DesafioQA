
//Classe que contém todos os elementos referente a página de carrinho.

class CarrinhoElements{

    botaoCarrinho = () => {return ':nth-child(3) > .product-item > .details > .product-title > a'};
    botaoCheckout = () => {return '#checkout'};
    botaoTermos = () => {return '[type=checkbox]'}
    validacaoCarrinho = () => {return 'h1'}
}

export default CarrinhoElements;