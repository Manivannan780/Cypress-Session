// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("login_Application", function (email, password) {
    
    cy.get('[data-test="username"]').type(email)
    cy.get('[data-test="password"]').type(password)
    cy.get('[id="login-button"]').click()
    
  })
  

Cypress.Commands.add('Session_Login', function (email, password) {

    cy.session([email, password], () => {
        
        cy.visit('/Catalog.action');
        cy.get('div[id="MenuContent"] a[href*="sign"]').contains("Sign In").click()
        cy.get('div[id="Catalog"] p').contains("Please enter your username and password.").should('be.visible')
        cy.get('input[name="username"]').should('be.visible').type(email);
        cy.get('input[name="password"]').should('be.visible').clear();
        cy.get('input[name="password"]').type(password);
        cy.get('input[name="signon"][type="submit"]').click();
        cy.url().should('include', '/Catalog.action');
        cy.get('div[id="MenuContent"] a[href*="AccountForm"]').should('be.visible');

    })

})



Cypress.Commands.add("logout_Application", function () {
    
  cy.get('div[class="bm-burger-button"]').click();
  cy.get('nav[class="bm-item-list"] a[id="inventory_sidebar_link"]').contains('All Items').should('be.visible')
  cy.get('nav[class="bm-item-list"] a[id="about_sidebar_link"]').contains('About').should('be.visible')
  cy.get('nav[class="bm-item-list"] a[id="reset_sidebar_link"]').contains('Reset App State').should('be.visible')
  cy.get('nav[class="bm-item-list"] a[id="logout_sidebar_link"]').contains('Logout').should('be.visible').click()

  
})


Cypress.Commands.add("Handling_Exception", function () {
  Cypress.on("uncaught:exception", function (err, runnable) {
    return false
  })
})
