

class   LoginPage {

    go() {
        cy.visit('www.saucedemo.com/v1/index.html')     
        cy.title().should('eq', 'Swag Labs')
    }

    login(user) {
        cy.get('#user-name').type(user.username)
        cy.get('#password').type(user.password)        
    }

    submit() {
        cy.get('#login-button').click()
    }

    alertHaveText(expectedText){
        cy.get('[data-test="error"]').should('have.text', expectedText)
    }
}
export default LoginPage