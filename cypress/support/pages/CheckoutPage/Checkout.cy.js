
class CheckoutPage {

    information(user) {
        cy.get('.checkout_button').click();
        cy.get('#first-name').type(user.name);
        cy.get('#last-name').type(user.lastname);
        cy.get('#postal-code').type(user.postalcode);
        cy.get('input[type=submit]').click();
    } 
    
}
export default CheckoutPage