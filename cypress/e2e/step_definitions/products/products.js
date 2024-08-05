import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../../support/pages/LoginPage/LoginPage.cy.js'
import ProductsPage from '../../../support/pages/ProductsPage/ProductsPage.cy.js';

const loginPage = new LoginPage()
const productsPage = new ProductsPage()

Given('faz o login com uma credencial válida', ()=> {

    const user = {
    username: 'standard_user',
    password: 'secret_sauce'  
}     
    loginPage.go()    
    loginPage.login(user)
    loginPage.submit()  
});

When('adiciona produtos ao carrinho', ()=> {
    
    productsPage.addProductToCart('Sauce Labs Bike Light')
    productsPage.backButton()
    
    productsPage.addProductToCart('Sauce Labs Onesie')
    productsPage.backButton()

    productsPage.addProductToCart('Sauce Labs Fleece Jacket')

    productsPage.goToCart()
})    
         
And('remove um produto do carrinho', () => {    
    productsPage.removeProductFromCart('Sauce Labs Bike Light')
})

Then('deve exibir a lista atualizada de produtos no carrinho', ()=> {
    const expectedProducts = ['Sauce Labs Onesie', 'Sauce Labs Fleece Jacket'];
    productsPage.verifyProductsInCart(expectedProducts)
})        
    



