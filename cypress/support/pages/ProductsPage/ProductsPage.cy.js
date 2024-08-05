
class ProductsPage {

    goToCart() {
      cy.get('a[href="./cart.html"]').click();
    }
  
    addProductToCart(productName) {
        cy.contains('.inventory_item_name', productName).should('be.visible').click();
        cy.get('.btn_primary').click();        
    }

    backButton() {
        cy.get('button[class*="inventory_details_back_button"]').click({ force: true });
    }
    
    removeProductFromCart(productName) {
      cy.contains('#item_0_title_link', productName,{ timeout: 10000 })
        .should('be.visible')   
        .parent()
        .find('button[class^="btn_secondary"]')
        .click();
    }    

    verifyProductsInCart(expectedProducts) {
        cy.get('.cart_item').each(($el, index) => {
          cy.wrap($el).find('.inventory_item_name').should('have.text', expectedProducts[index]);

        })
    }    
}
  
export default ProductsPage
  