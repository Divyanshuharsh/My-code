import { highlight } from 'cypress-highlight'

class POM{

static load_tatamotor(){
    //cy.Tatamotors(); // Custom Command.
    cy.visit(Cypress.env('url')) //Environmental Variable.
}
static Sandwitch_button(){
    cy.sandwitch_button(); //Custom command.
}
static click_Product(){
    cy.wait(1000)
    highlight('.productCursor')
    cy.get('.productCursor').click();
}
static click_Bus_and_Service(){
    cy.wait(1000)
    highlight('.full_nav > [href="/products/trucks-buses/"]')
    cy.get('.full_nav > [href="/products/trucks-buses/"]').click();
}
static Assert_URL(){
    cy.wait(2000);
    cy.url().should('eq', 'https://www.tatamotors.com/products/trucks-buses/')
}
static Passenger_transport(){
    cy.wait(2000);
    cy.contains('Passenger Transportation Solutions').click();
}
static Load_Transport(){
    cy.wait(2000);
    cy.contains('Load Transportation Solutions').click();
}
static click_News(){
    cy.wait(2000);
    highlight('.news_container');
    cy.screenshot('selectors', {capture: 'runner'})
   cy.get('.News').click();
}
static click_Videos(){
    cy.wait(2000);
    highlight('.news_container');
    cy.get('.YouTube').click();
}
static click_Twitter(){
    cy.wait(2000);
    
    cy.get('.Twitter').click();
}
static click_facebook(){
    cy.wait(2000);
  
    cy.get('.FB').click();
}
}
export default POM