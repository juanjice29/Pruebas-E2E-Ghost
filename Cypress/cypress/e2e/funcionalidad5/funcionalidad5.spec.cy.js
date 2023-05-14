
//Funcionalidad hacer Login
import {globalVariables} from "../../environment/credentials"
import NewPagePage from "../../pages/NewPagePage";
import NavBarPage from '../../pages/NavBarPage';
import PagePage from '../../pages/pagePage';
import { faker } from '@faker-js/faker';
import PostPage from "../../pages/PostPage";
import NewPostPage from "../../pages/NewPostPage";

//Escenario 1
describe('Con mi usuario de ghost quiero crear un post', 
  () => {
    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })
        it("Hacer click en la funcionalidad para crear post y llenar formulario",()=>{   
            const navPage=new NavBarPage();
            const newPostPage= new NewPostPage();
            const postPage=new PostPage();
            navPage.getPostFunction().click( {multiple: true} );            
            navPage.getPostFunction().should("exist");            
            cy.wait(1000);
            postPage.getNewPostButton().click({force: true});
            cy.wait(1000);
            newPostPage.getTitleName().should("exist");
            newPostPage.getInputDescription().should("exist");
            cy.wait(1000);
            newPostPage.getTitleName().type(faker.name.jobTitle());
            cy.wait(1000);
            newPostPage.getInputDescription().type(faker.lorem.lines(1));   
            cy.wait(1000);         
            newPostPage.getPublish().click();
            cy.wait(1000);
            newPostPage.getSaveButton().click();
            cy.wait(1000);   
            navPage.getPostFunction().click({multiple: true}); 
        })       

    }
  
)

//Escenario 2

describe('Con mi usuario de ghost quiero crear un post sin descripción', 
  () => {
    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })

    it("Hacer click en la funcionalidad para crear post y llenar formulario",()=>{   
        const navPage=new NavBarPage();
        const newPostPage= new NewPostPage();
        const postPage=new PostPage();
        navPage.getPostFunction().click({multiple: true});            
        navPage.getPostFunction().should("exist");            
        cy.wait(1000);
        postPage.getNewPostButton().click({multiple: true});
        cy.wait(1000);
        newPostPage.getTitleName().should("exist");
        cy.wait(1000);
        newPostPage.getTitleName().type(faker.name.jobTitle());
        cy.wait(1000);     
        newPostPage.getPublish().click();
        cy.wait(1000);
        newPostPage.getSaveButton().click();
        cy.wait(1000);   
        navPage.getPostFunction().click({multiple: true}); 
    })     

    }
  
)

//Escenario 3
describe('Con mi usuario de ghost quiero crear un post sin título', 
  () => {
    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })

    it("Hacer click en la funcionalidad para crear post y llenar formulario",()=>{   
        const navPage=new NavBarPage();
        const newPostPage= new NewPostPage();
        const postPage=new PostPage();
        navPage.getPostFunction().click({multiple: true});            
        navPage.getPostFunction().should("exist");            
        cy.wait(1000);
        postPage.getNewPostButton().click({multiple: true});
        cy.wait(1000);
        newPostPage.getInputDescription().should("exist");
        cy.wait(1000);
        newPostPage.getInputDescription().type(faker.lorem.lines(1));
        cy.wait(1000);     
        newPostPage.getPublish().click();
        cy.wait(1000);
        newPostPage.getSaveButton().click();
        cy.wait(1000);   
        navPage.getPostFunction().click({multiple: true}); 
    })       

    }
  
)

//Escenario 4
describe('Con mi usuario de ghost quiero crear un post y asignarlo a un tag', 
  () => {
    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })

    it("Hacer click en la funcionalidad para crear pagina y llenar formulario",()=>{   
        const navPage=new NavBarPage();
        const newPostPage= new NewPostPage();
        const postPage=new PostPage();
        navPage.getPostFunction().click({multiple: true});            
        navPage.getPostFunction().should("exist");            
        cy.wait(1000);
        postPage.getNewPostButton().click({multiple: true})
        cy.wait(1000);
        postPage.getTitleName().should("exist")
        postPage.getInputDescription().should("exist")
        cy.wait(1000);
        newPostPage.getTitleName
        
        ().type(faker.name.jobTitle());
        cy.wait(1000);
        newPostPage.getInputDescription().type(faker.lorem.lines(1));   
        cy.wait(1000);
        newPostPage.getSettings().click();
        cy.wait(1000);
        newPostPage.getTags().click();
        cy.wait(1000);
        newPostPage.getTag().click();
        cy.wait(1000);
        newPostPage.getClose().click();
        cy.wait(1000);         
        newPostPage.getPublish().click();
        cy.wait(1000);
        newPostPage.getSaveButton().click();
        cy.wait(1000);   
        navPage.getPostFunction().click({multiple: true}); 
    })      
    }
)

