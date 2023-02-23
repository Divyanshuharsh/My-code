/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
//import { highlight } from 'cypress-highlight'
import POM from './Tata_POM'

//Scenario 1
Given('User navigate to landing page', function(){
   POM.load_tatamotor();
})
When('User click on Sandwitch button', function(){
    POM.Sandwitch_button();
})
And('User click on Product', function(){
    POM.click_Product();
})
Then('User click on Bus and Service page', function(){
    POM.click_Bus_and_Service();
})

//Scenario 2 .......................................

When('User navigate to bus and service page assert the url', function(){
   POM.Assert_URL();
})

When('User click on Passanger transport', function(){
    POM.Passenger_transport();
})
Then('User click on Load Transport', function(){
    POM.Load_Transport();
})


//Scenario 3 ......................................

When('User click on the News button', function(){
    POM.click_News();
  
})
When('User click on Videos button', function () {
    POM.click_Videos();
   
})
And('User click on Twitter button', function(){
   POM.click_Twitter();
})
Then('User click on Facebook button', function(){
    POM.click_facebook();
})