import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from  '../../../support/pages/LoginPage/LoginPage.cy.js'
import ProductsPage from '../../../support/pages/ProductsPage/ProductsPage.cy.js'
import CheckoutPage from '../../../support/pages/CheckoutPage/Checkout.cy.js';

const loginPage = new LoginPage()
const productsPage = new ProductsPage()
const checkoutPage = new CheckoutPage()

let cartProducts = []

Given('faz o login com uma credencial válida', () => {
    const user = {
    username: 'standard_user',
    password: 'secret_sauce'
};
    loginPage.go()
    loginPage.login(user)
    loginPage.submit()
});

And('adiciona produtos ao carrinho', () => {
    productsPage.addProductToCart('Sauce Labs Bolt T-Shirt')
    productsPage.backButton()

    productsPage.addProductToCart('Test.allTheThings() T-Shirt (Red)')

    productsPage.goToCart();
    cy.get('.cart_item .inventory_item_name').each(($el) => {
    cartProducts.push($el.text().trim());
    });
});

When('realiza o checkout', () => {
    const user = {
    name: 'Cintia'    ,
    lastname: 'Okado',
    postalcode: '123456'
}   
    checkoutPage.information(user)   
});

Then('os itens do checkout devem corresponder aos produtos adicionados ao carrinho', () => {
  const checkoutProducts = [];
  cy.get('.cart_item .inventory_item_name').each(($el, index, $list) => {
    checkoutProducts.push($el.text().trim());
    if (index === $list.length - 1) {
      expect(checkoutProducts).to.deep.equal(cartProducts);
    }
  });
});
