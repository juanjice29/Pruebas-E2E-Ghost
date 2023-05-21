//Funcionalidad crear post
import {globalVariables} from "../../environment/credentials"
import NewPagePage from "../../pages/NewPagePage";
import NavBarPage from '../../pages/NavBarPage';
import PagePage from '../../pages/pagePage';
import { faker } from '@faker-js/faker';
import PostPage from "../../pages/PostPage";
import NewPostPage from "../../pages/NewPostPage";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

//Escenarios aleatorios del 1 al 4 en archivo funcionalidad5.spec.cy.js  
//Escenario 13
describe('Con mi usuario de ghost quiero crear un post y que el título contenga solo una palabra', 
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
            cy.screenshot(`func5/esc13/e1`,{overwrite:true});             
            cy.wait(1000);
            postPage.getNewPostButton().click({force: true});
            cy.screenshot(`func5/esc13/e2`,{overwrite:true});  
            cy.wait(1000);
            newPostPage.getTitleName().should("exist");
            newPostPage.getInputDescription().should("exist");
            cy.screenshot(`func5/esc13/e3`,{overwrite:true});  
            cy.wait(1000);
            newPostPage.getTitleName().type(faker.lorem.word());
            cy.screenshot(`func5/esc13/e4`,{overwrite:true});  
            cy.wait(1000);
            cy.screenshot(`func5/esc13/e5`,{overwrite:true});    
            cy.wait(1000);         
            newPostPage.getPublish().click();
            cy.screenshot(`func5/esc13/e6`,{overwrite:true});  
            cy.wait(1000);
            newPostPage.getSaveButton().click();
            cy.screenshot(`func5/esc13/e7`,{overwrite:true});  
            cy.wait(1000);   
            navPage.getPostFunction().click({multiple: true}); 
            cy.screenshot(`func5/esc13/e8
            `,{overwrite:true});  
        })       

    }
  
)

//Escenario 14
describe('Con mi usuario de ghost quiero crear un post y que el título contenga 10 palabras', 
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
            cy.screenshot(`func5/esc13/e1`,{overwrite:true});             
            cy.wait(1000);
            postPage.getNewPostButton().click({force: true});
            cy.screenshot(`func5/esc14/e2`,{overwrite:true});  
            cy.wait(1000);
            newPostPage.getTitleName().should("exist");
            newPostPage.getInputDescription().should("exist");
            cy.screenshot(`func5/esc14/e3`,{overwrite:true});  
            cy.wait(1000);
            newPostPage.getTitleName().type(faker.lorem.words(10));
            cy.screenshot(`func5/esc14/e4`,{overwrite:true});  
            cy.wait(1000);
            cy.screenshot(`func5/esc14/e5`,{overwrite:true});    
            cy.wait(1000);         
            newPostPage.getPublish().click();
            cy.screenshot(`func5/esc14/e6`,{overwrite:true});  
            cy.wait(1000);
            newPostPage.getSaveButton().click();
            cy.screenshot(`func5/esc14/e7`,{overwrite:true});  
            cy.wait(1000);   
            navPage.getPostFunction().click({multiple: true}); 
            cy.screenshot(`func5/esc14/e8
            `,{overwrite:true});  
        })       

    }
  
)

//Escenario 15
describe('Con mi usuario de ghost quiero crear un post y que la descripción contenga 1 palabra', 
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
            cy.screenshot(`func5/esc15/e1`,{overwrite:true});             
            cy.wait(1000);
            postPage.getNewPostButton().click({force: true});
            cy.screenshot(`func5/esc15/e2`,{overwrite:true});  
            cy.wait(1000);
            newPostPage.getTitleName().should("exist");
            newPostPage.getInputDescription().should("exist");
            cy.screenshot(`func5/esc15/e3`,{overwrite:true});  
            cy.wait(1000);
            newPostPage.getInputDescription().type(faker.lorem.word());
            cy.screenshot(`func5/esc15/e4`,{overwrite:true});  
            cy.wait(1000);
            cy.screenshot(`func5/esc15/e5`,{overwrite:true});    
            cy.wait(1000);         
            newPostPage.getPublish().click();
            cy.screenshot(`func5/esc15/e6`,{overwrite:true});  
            cy.wait(1000);
            newPostPage.getSaveButton().click();
            cy.screenshot(`func5/esc15/e7`,{overwrite:true});  
            cy.wait(1000);   
            navPage.getPostFunction().click({multiple: true}); 
            cy.screenshot(`func5/esc15/e8
            `,{overwrite:true});  
        })       

    }
  
)

//Escenario 16
describe('Con mi usuario de ghost quiero crear un post y que la descripción contenga 100 palabras', 
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
            cy.screenshot(`func5/esc16/e1`,{overwrite:true});             
            cy.wait(1000);
            postPage.getNewPostButton().click({force: true});
            cy.screenshot(`func5/esc16/e2`,{overwrite:true});  
            cy.wait(1000);
            newPostPage.getTitleName().should("exist");
            newPostPage.getInputDescription().should("exist");
            cy.screenshot(`func5/esc16/e3`,{overwrite:true});  
            cy.wait(1000);
            newPostPage.getInputDescription().type(faker.lorem.words(100));
            cy.screenshot(`func5/esc16/e4`,{overwrite:true});  
            cy.wait(1000);
            cy.screenshot(`func5/esc16/e5`,{overwrite:true});    
            cy.wait(1000);         
            newPostPage.getPublish().click();
            cy.screenshot(`func5/esc16/e6`,{overwrite:true});  
            cy.wait(1000);
            newPostPage.getSaveButton().click();
            cy.screenshot(`func5/esc16/e7`,{overwrite:true});  
            cy.wait(1000);   
            navPage.getPostFunction().click({multiple: true}); 
            cy.screenshot(`func5/esc16/e8
            `,{overwrite:true});  
        })       

    }
  
)