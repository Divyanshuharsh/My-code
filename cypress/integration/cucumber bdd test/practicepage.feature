Feature: test function of the application

As a user I am able to use all the functions in the page
Scenario: User will navigate to the youtube page
Given User should land on the youtube page
When user land on page and click on search box
And  user type "nature 4k video" in the search box 
Then user click on search button
Scenario: User will search again
When User should click on Search button
Then user clear search field
When user type "cucumber" in search box
Then user click on search button
When Search field should contain "cucumber" in the search box