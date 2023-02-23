/// <reference types="Cypress" />
import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import youtube from './youtube_POM'
import practicepage from './youtube_POM'


Given('User should land on the youtube page',function(){
    youtube.loadyoutube()
})
When('user land on page and click on search box', function(){
    youtube.clickonsearch1()
})
And('user type {string} in the search box', name=> {
    youtube.typeinsearch(name)
   
})

And('user type nature 4k in the search box', function() {
   youtube.inputinsearch()

})
Then('user click on search button', function(){
    youtube.clickonsearch()
})

Then('user clear search field', function(){
    youtube.clearsearch()
})

When('User should click on Search button',function(){

    youtube.clickonbutton()
})

When('user type {string} in search box', charlie=> {
    youtube.userinput(charlie)
})

Then('user click on search button',function() {

    youtube.search()
    
})

When('Search field should contain {string} in the search box', boxname=>{

   youtube.searchcontain(boxname)


    
})