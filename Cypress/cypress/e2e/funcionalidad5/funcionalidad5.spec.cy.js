
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
            cy.screenshot(`func5/esc1/accion1`,{overwrite:true});             
            cy.wait(1000);
            postPage.getNewPostButton().click({force: true});
            cy.screenshot(`func5/esc1/accion1`,{overwrite:true});  
            cy.wait(1000);
            newPostPage.getTitleName().should("exist");
            newPostPage.getInputDescription().should("exist");
            cy.screenshot(`func5/esc1/accion1`,{overwrite:true});  
            cy.wait(1000);
            newPostPage.getTitleName().type(faker.name.jobTitle());
            cy.screenshot(`func5/esc1/accion1`,{overwrite:true});  
            cy.wait(1000);
            newPostPage.getInputDescription().type(faker.lorem.lines(1)); 
            cy.screenshot(`func5/esc1/accion1`,{overwrite:true});    
            cy.wait(1000);         
            newPostPage.getPublish().click();
            cy.screenshot(`func5/esc1/accion1`,{overwrite:true});  
            cy.wait(1000);
            newPostPage.getSaveButton().click();
            cy.screenshot(`func5/esc1/accion1`,{overwrite:true});  
            cy.wait(1000);   
            navPage.getPostFunction().click({multiple: true}); 
            cy.screenshot(`func5/esc1/accion1`,{overwrite:true});  
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
        cy.screenshot(`func5/esc2/accion1`,{overwrite:true});      
        cy.wait(1000);
        postPage.getNewPostButton().click({multiple: true});
        cy.screenshot(`func5/esc2/accion2`,{overwrite:true});
        cy.wait(1000);
        newPostPage.getTitleName().should("exist");
        cy.screenshot(`func5/esc2/accion3`,{overwrite:true});
        cy.wait(1000);
        newPostPage.getTitleName().type(faker.name.jobTitle());
        cy.screenshot(`func5/esc2/accion4`,{overwrite:true});
        cy.wait(1000);     
        newPostPage.getPublish().click();
        cy.screenshot(`func5/esc2/accion5`,{overwrite:true});
        cy.wait(1000);
        newPostPage.getSaveButton().click();
        cy.screenshot(`func5/esc2/accion6`,{overwrite:true});
        cy.wait(1000);   
        navPage.getPostFunction().click({multiple: true});
        cy.screenshot(`func5/esc2/accion7`,{overwrite:true}); 
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
        cy.screenshot(`func5/esc3/accion1`,{overwrite:true});           
        cy.wait(1000);
        postPage.getNewPostButton().click({multiple: true});
        cy.screenshot(`func5/esc3/accion2`,{overwrite:true});         
        cy.wait(1000);
        newPostPage.getInputDescription().should("exist");
        cy.screenshot(`func5/esc3/accion3`,{overwrite:true});         
        cy.wait(1000);
        newPostPage.getInputDescription().type(faker.lorem.lines(1));
        cy.screenshot(`func5/esc3/accion4`,{overwrite:true});         
        cy.wait(1000);     
        newPostPage.getPublish().click();
        cy.screenshot(`func5/esc3/accion5`,{overwrite:true});         
        cy.wait(1000);
        newPostPage.getSaveButton().click();
        cy.screenshot(`func5/esc3/accion6`,{overwrite:true});         
        cy.wait(1000);   
        navPage.getPostFunction().click({multiple: true}); 
        cy.screenshot(`func5/esc3/accion7`,{overwrite:true});         
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
        cy.screenshot(`func5/esc4/accion1`,{overwrite:true});                     
        cy.wait(1000);
        postPage.getNewPostButton().click({multiple: true})
        cy.screenshot(`func5/esc4/accion2`,{overwrite:true});
        cy.wait(1000);
        postPage.getTitleName().should("exist")
        postPage.getInputDescription().should("exist")
        cy.screenshot(`func5/esc4/accion3`,{overwrite:true});
        cy.wait(1000);
        newPostPage.getTitleName().type(faker.name.jobTitle());
        cy.screenshot(`func5/esc4/accion4`,{overwrite:true});
        cy.wait(1000);
        newPostPage.getInputDescription().type(faker.lorem.lines(1)); 
        cy.screenshot(`func5/esc4/accion5`,{overwrite:true});  
        cy.wait(1000);
        newPostPage.getSettings().click();
        cy.screenshot(`func5/esc4/accion6`,{overwrite:true});
        cy.wait(1000);
        newPostPage.getTags().click();
        cy.screenshot(`func5/esc4/accion7`,{overwrite:true});
        cy.wait(1000);
        newPostPage.getTag().click();
        cy.screenshot(`func5/esc4/accion8`,{overwrite:true});
        cy.wait(1000);
        newPostPage.getClose().click();
        cy.screenshot(`func5/esc4/accion9`,{overwrite:true});
        cy.wait(1000);         
        newPostPage.getPublish().click();
        cy.screenshot(`func5/esc4/accion10`,{overwrite:true});
        cy.wait(1000);
        newPostPage.getSaveButton().click();
        cy.screenshot(`func5/esc4/accion11`,{overwrite:true});
        cy.wait(1000);   
        navPage.getPostFunction().click({multiple: true}); 
        cy.screenshot(`func5/esc4/accion12`,{overwrite:true});
    })      
    }
)

