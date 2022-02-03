import ProdutosElements from "../elements/ProdutosElements"
const produtosElements = new ProdutosElements;

class ProdutosPage{

    clickCategoria() {
        cy.get(produtosElements.botaoComputers).contains('Computers').click();
    }

    adicionarProdutos(){

            //Adicionando notebook
            cy.get(produtosElements.botaoNotebooks).contains('Notebooks').click({force: true});
            cy.get(produtosElements.botaoAsus).contains('Asus').click({force: true});
            cy.wait(5000);
            cy.get(produtosElements.adicionarItem).contains('Add to cart').click({force: true});
            
    
            //Adicionando livro
            cy.get(produtosElements.botaoBooks).contains('Books').click({force: true});
            cy.get(produtosElements.botaoPride).contains('Pride').click({force: true});
            cy.wait(5000)
            cy.get(produtosElements.adicionarItem).contains('Add to cart').click({force: true});
            
    
            //Adicionando pulseira
            cy.get(produtosElements.botaoJewelry).contains('Jewelry').click({force: true});
            cy.get(produtosElements.botaoVintage).contains('Vintage').click({force: true});
            cy.get(5000)
            cy.get(produtosElements.adicionarItem).contains('Add to cart').click({force: true});
           
        
    }

}

export default ProdutosPage;