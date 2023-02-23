Feature: Test Tata Mortor Website

Scenario: User will navigate to Tata Motor page
Given User navigate to landing page
When User click on Sandwitch button
And User click on Product
Then User click on Bus and Service page

Scenario: User switch between Load Transport and Passanger Transport
When User navigate to bus and service page assert the url
When User click on Passanger transport
Then User click on Load Transport

Scenario: User click on multiple button
When User click on the News button
When User click on Videos button
And User click on Twitter button
Then User click on Facebook button