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

import { highlight } from 'cypress-highlight'

//Cypress.Commands.add('Tatamotors',()=>{
 //   cy.visit('https://www.tatamotors.com')
//})


Cypress.Commands.add('sandwitch_button',()=>{
    cy.wait(2000)
    highlight('.cd-nav-trigger > span')
    cy.get('.cd-nav-trigger > span').click();
})

Cypress.Commands.add('navigate', ()=>{
   cy.visit('https://www.youtube.com')
   
    })

Cypress.Commands.add('search_box',()=>{
    cy.get("#search-input").click()
})