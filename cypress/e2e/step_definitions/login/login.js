import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../../support/pages/LoginPage/LoginPage.cy.js'

const loginPage = new LoginPage()

Given('que o usuário acessa a página de login', ()=> {
    loginPage.go()    
});

When('faz o login com uma credencial válida', ()=> {
      
    const user = {
        username: 'standard_user',
        password: 'secret_sauce'  
    }
    loginPage.login(user)
    loginPage.submit()           
});

Then('deve conseguir logar com sucesso', () => {
    cy.get('.peek').should('be.visible')
})

Given('que o usuário acessa a página de login', ()=> {
    loginPage.go()    
});

When('faz o login com uma credencial bloqueada', ()=> {
    const user = {
        username: 'locked_out_user',
        password: 'secret_sauce'  
    }    
    loginPage.login(user)
    loginPage.submit()       
})    

Then('deve exibir mensagem de alerta de usuário bloqueado', ()=> {
    loginPage.alertHaveText('Epic sadface: Sorry, this user has been locked out.')                  
})
    
Given('que o usuário acessa a página de login', ()=> {
    loginPage.go()    
})
    
When('faz o login com um usuário ou senha inválido', ()=> {
    const user = {
        username: 'faker',
        password: '123456'  
    }
    loginPage.login(user)
    loginPage.submit()  
})
    
Then('deve exibir mensagem de alerta informando que o usuário ou senha estão inválidos', ()=> {
    loginPage.alertHaveText('Epic sadface: Username and password do not match any user in this service')
})



