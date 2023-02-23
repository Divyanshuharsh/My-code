/// <reference types="Cypress" />
describe('this is the first test block', function (){

    it("here is the test case", function() {
        cy.visit("https://www.youtube.com/")
        var search =cy.get("#search-input").click()
        search.type("Excuses AP Dillon")
        cy.get("#search-icon-legacy").click()
        cy.get("a[title='Excuses 1 Hour Loop || AP Dhillon | Gurinder Gill | Intense || EUzX Editz']").click()
       
    })
})