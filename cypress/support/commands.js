// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


const userName=Cypress.env('userName');
const password=Cypress.env('password');
const url=Cypress.env('url');
let userNameTextbox='[name="username"]';
let passwordTextbox='[name="password"]';
let submitLoginButton='[type="submit"]';
let brandImage='[alt="company-branding"]'
let logoutLink='[role="menuitem"][href*="logout"]';
let userDropDownName='[class="oxd-userdropdown-name"]';


Cypress.Commands.add('Login',()=>{

    cy.visit(url+'/web/index.php/auth/login')
    cy.log(cy.title())
    cy.get(brandImage)
    cy.get(userNameTextbox).clear()
    cy.get(userNameTextbox).type(userName)
    cy.get(passwordTextbox).clear()
    cy.get(passwordTextbox).type(password)
    cy.get(submitLoginButton).click()

})

Cypress.Commands.add('Logout',()=>{
    cy.get(userDropDownName).click() //click the user drop down on top right
    cy.get(logoutLink).click() //from the drop down menu click on logout   
})
