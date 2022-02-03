//Classe que contém todos os elementos da página de produtos.

class ProdutosElements{

    //Categorias
    botaoComputers = () => {return '.notmobile > :nth-child(1) > [href="/computers"]'}
    botaoBooks= () => {return '.notmobile > :nth-child(5) > a'}
    botaoJewelry = () => {return '.notmobile > :nth-child(6) > a'}

    //Sub-categorias
    botaoNotebooks = () => {return '.active > .sublist > :nth-child(2) > a'}

    //Produtos
    botaoAsus = () => {return ':nth-child(2) > .product-item > .details > .product-title > a'}
    botaoPride = () => {return ':nth-child(3) > .product-item > .details > .product-title > a'}
    botaoVintage = () => {return ':nth-child(3) > .product-item > .picture > a > img'}

    //Botão adicionar
    adicionarItem = () => {return '.add-to-cart'}
  

}
export default ProdutosElements;