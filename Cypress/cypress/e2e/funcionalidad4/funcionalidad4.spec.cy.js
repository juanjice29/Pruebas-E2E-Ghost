
//Funcionalidad hacer Login
import {globalVariables} from "../../environment/credentials"
import NewPagePage from "../../pages/NewPagePage";
import NavBarPage from '../../pages/NavBarPage';
import PagePage from '../../pages/pagePage';
import { faker } from '@faker-js/faker';

//Escenario 1
describe('Con mi usuario de ghost quiero crear una página', 
  () => {
    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })
        it("Hacer click en la funcionalidad para crear pagina y llenar formulario",()=>{   
            const navPage=new NavBarPage();
            const newPagePage= new NewPagePage();
            const pagePage=new PagePage();
            navPage.getPageFunction().click();            
            navPage.getPageFunction().should("exist");            
            cy.wait(1000);
            pagePage.getNewPageButton().click()
            cy.wait(1000);
            newPagePage.getInputTitle().should("exist")
            newPagePage.getInputDescription().should("exist")
            cy.wait(1000);
            newPagePage.getInputTitle().type(faker.name.jobTitle());
            cy.wait(1000);
            newPagePage.getInputDescription().type(faker.lorem.lines(1));   
            cy.wait(1000);         
            newPagePage.getSaveButton().click();
            cy.wait(1000);
            newPagePage.getInputPublish().click();
            cy.wait(1000);   
            navPage.getPageFunction().click(); 
        })       

    }
  
)

//Escenario 2

describe('Con mi usuario de ghost quiero crear una página sin descripción', 
  () => {
    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })

        it("Hacer click en la funcionalidad para crear pagina y llenar formulario",()=>{   
            const navPage=new NavBarPage();
            const newPagePage= new NewPagePage();
            const pagePage=new PagePage();
            navPage.getPageFunction().click();            
            navPage.getPageFunction().should("exist");            
            cy.wait(1000);
            pagePage.getNewPageButton().click()
            cy.wait(1000);
            newPagePage.getInputTitle().should("exist")
            cy.wait(1000);
            newPagePage.getInputTitle().type(faker.name.jobTitle());
            cy.wait(1000);
            newPagePage.getSaveButton().click();
            cy.wait(1000);
            newPagePage.getInputPublish().click();
            cy.wait(1000);   
            navPage.getPageFunction().click(); 
        })     

    }
  
)

//Escenario 3
describe('Con mi usuario de ghost quiero crear una página sin título', 
  () => {
    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })

        it("Hacer click en la funcionalidad para crear pagina y llenar formulario",()=>{   
            const navPage=new NavBarPage();
            const newPagePage= new NewPagePage();
            const pagePage=new PagePage();
            navPage.getPageFunction().click();            
            navPage.getPageFunction().should("exist");            
            cy.wait(1000);
            pagePage.getNewPageButton().click()
            cy.wait(1000);
            newPagePage.getInputDescription().should("exist")
            cy.wait(1000);
            newPagePage.getInputDescription().type(faker.lorem.lines(1));
            cy.wait(1000);
            newPagePage.getSaveButton().click();
            cy.wait(1000);
            newPagePage.getInputPublish().click();
            cy.wait(1000);   
            navPage.getPageFunction().click(); 
        })     

    }
  
)

//Escenario 4
describe('Con mi usuario de ghost quiero crear una página y programarla para que se publique en una fecha específica', 
  () => {
    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })

    it("Hacer click en la funcionalidad para crear pagina y llenar formulario",()=>{   
        const navPage=new NavBarPage();
        const newPagePage= new NewPagePage();
        const pagePage=new PagePage();
        navPage.getPageFunction().click();            
        navPage.getPageFunction().should("exist");            
        cy.wait(1000);
        pagePage.getNewPageButton().click()
        cy.wait(1000);
        newPagePage.getInputTitle().should("exist")
        newPagePage.getInputDescription().should("exist")
        cy.wait(1000);
        newPagePage.getInputTitle().type(faker.name.jobTitle());
        cy.wait(1000);
        newPagePage.getInputDescription().type(faker.lorem.lines(1));   
        cy.wait(1000);         
        newPagePage.getSaveButton().click();
        cy.wait(1000);
        newPagePage.getSchedule().click();
        cy.wait(1000);
        newPagePage.getInputPublish().click();
        cy.wait(1000);   
        navPage.getPageFunction().click(); 
    })       
    }
)

//Escenario 5
describe('Con mi usuario de ghost quiero crear una página y asignarla a un tag', 
  () => {
    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })

    it("Hacer click en la funcionalidad para crear pagina y llenar formulario",()=>{   
        const navPage=new NavBarPage();
        const newPagePage= new NewPagePage();
        const pagePage=new PagePage();
        navPage.getPageFunction().click();            
        navPage.getPageFunction().should("exist");            
        cy.wait(1000);
        pagePage.getNewPageButton().click()
        cy.wait(1000);
        newPagePage.getInputTitle().should("exist")
        newPagePage.getInputDescription().should("exist")
        cy.wait(1000);
        newPagePage.getInputTitle().type(faker.name.jobTitle());
        cy.wait(1000);
        newPagePage.getInputDescription().type(faker.lorem.lines(1));   
        cy.wait(1000);
        newPagePage.getSettings().click();
        cy.wait(1000);
        newPagePage.getTags().click();
        cy.wait(1000);
        newPagePage.getTag().click();
        cy.wait(1000);
        newPagePage.getClose().click();
        cy.wait(1000);         
        newPagePage.getSaveButton().click();
        cy.wait(1000);
        newPagePage.getSchedule().click();
        cy.wait(1000);
        newPagePage.getInputPublish().click();
        cy.wait(1000);   
        navPage.getPageFunction().click(); 
    })       
    }
)

//Escenario 6
describe('Con mi usuario de ghost quiero crear una página y asignarla a un tag, usuario y extracto', 
  () => {
    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })

    it("Hacer click en la funcionalidad para crear pagina y llenar formulario",()=>{   
        const navPage=new NavBarPage();
        const newPagePage= new NewPagePage();
        const pagePage=new PagePage();
        navPage.getPageFunction().click();            
        navPage.getPageFunction().should("exist");            
        cy.wait(1000);
        pagePage.getNewPageButton().click()
        cy.wait(1000);
        newPagePage.getInputTitle().should("exist")
        newPagePage.getInputDescription().should("exist")
        cy.wait(1000);
        newPagePage.getInputTitle().type(faker.name.jobTitle());
        cy.wait(1000);
        newPagePage.getInputDescription().type(faker.lorem.lines(1));   
        cy.wait(1000);
        newPagePage.getSettings().click();
        cy.wait(1000);
        newPagePage.getTags().click();
        cy.wait(1000);
        newPagePage.getTag().click();
        cy.wait(1000);
        newPagePage.getExcerpt().type(faker.lorem.lines(1));
        cy.wait(1000);
        newPagePage.getAuthors().click();
        cy.wait(1000);
        newPagePage.getAuthor().click();
        cy.wait(1000)
        newPagePage.getClose().click();
        cy.wait(1000);         
        newPagePage.getSaveButton().click();
        cy.wait(1000);
        newPagePage.getSchedule().click();
        cy.wait(1000);
        newPagePage.getInputPublish().click();
        cy.wait(1000);   
        navPage.getPageFunction().click(); 
    })       
    }
)