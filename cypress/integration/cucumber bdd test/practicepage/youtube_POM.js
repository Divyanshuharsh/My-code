class youtube{

    static loadyoutube(){

        //cy.visit('https://www.youtube.com')
        //cy.get('.ytd-masthead.style-suggestive > .yt-simple-endpoint > #button').click()
        
        cy.navigate()
        
    }

    static clickonsearch1(){
        cy.search_box()
    }

    static typeinsearch(name){
        cy.get("#search-input").type(name)
    }
    static inputinsearch(){
        cy.get('#search-input > #search').invoke('text').then(text1),function () {
            expect(text1.trim()).to.equal()
        }
    }
    static clickonsearch(){
        cy.get("#search-icon-legacy").click()
    }

    static clearsearch(){
        cy.get("#search-input").click().clear()
    }
    static clickonbutton(){
        cy.get('#search-input').click()
    }
    static userinput(charlie){
        cy.get('#search-input').type(charlie)
    }
    static search(){
        cy.get("#search-icon-legacy").click()
    }
    static searchcontain(boxname){
        cy.get('#search-input > #search').should('have.text', boxname)
    }
    
    }
export default youtube










