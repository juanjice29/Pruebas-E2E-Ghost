import {globalVariables} from "../../environment/credentials"
import { faker } from '@faker-js/faker';
import NavBarPage from '../../pages/NavBarPage';
import TagPage from '../../pages/TagPage';
import NewTagPage from '../../pages/NewTagPAge';

 //Funcionalidad Crear un Tag
//Escenario 1

describe('Con mi usuario de ghost creo un Tag', 
  () => {
    
        
        beforeEach("Hacer Login",()=>{
            //Given I navigate to page "http://localhost:3001/ghost/#/signin"
            cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
        })
        let current_slug=""
        it("Hacer click en la funcionalidad para crear tag y llenar formulario",()=>{   
            const navPage= new NavBarPage();
            const tagPage= new TagPage();
            const newTagPage= new  NewTagPage();
            cy.screenshot(`func2/v-3.41.1/esc1/e1`,{overwrite:true})
            //When I click on the tag function   
            navPage.getTagFunction().click();            
            //Then I should have a new tag button
            navPage.getTagFunction().should("exist");
            cy.wait(1000);
            cy.screenshot(`func2/v-3.41.1/esc1/e2`,{overwrite:true}) 
            //And I click on the new tag button
            tagPage.getNewTagButton().click()
            cy.wait(1000);
            cy.screenshot(`func2/v-3.41.1/esc1/e3`,{overwrite:true}) 
            //Then I should have form to enter tag information and save button
            newTagPage.getInputName().should("exist")
            newTagPage.getInputSlug().should("exist")
            newTagPage.getInputDescription().should("exist")            
            cy.wait(1000);
            cy.screenshot(`func2/v-3.41.1/esc1/e4`,{overwrite:true})
            newTagPage.getInputName().type(faker.name.fullName());
            cy.wait(1000);
            //And I enter slug tag
            current_slug=faker.random.alphaNumeric(10)
            newTagPage.getInputSlug().focus().clear({force: true});
            cy.wait(1000);            
            newTagPage.getInputSlug().type(current_slug,{force: true});
            cy.screenshot(`func2/v-3.41.1/esc1/e5`,{overwrite:true})
            cy.wait(1000);
            //And I enter tag description
            newTagPage.getInputDescription().type(faker.lorem.lines(1));
            cy.wait(1000);   
            cy.screenshot(`func2/v-3.41.1/esc1/e6`,{overwrite:true});      
            //And I click Save
            newTagPage.getSaveButton().click();            
            cy.wait(2000);
            cy.screenshot(`func2/v-3.41.1/esc1/e7`,{overwrite:true});
            //And I click on the tag function
            navPage.getTagFunction().click(); 
            //Then I should have a new tag with correct slug link
            tagPage.getTagBySlug(current_slug).should("exist"); 
            cy.screenshot(`func2/v-3.41.1/esc1/e8`,{overwrite:true});          
        })       
    }  
)
//Escenario 2

describe('Con mi usuario de ghost creo un Tag sin titulo y luego lo corrijo', 
  () => {
    
        //And I click on the tag function   
        beforeEach("Hacer Login",()=>{
            cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
        })
        let current_slug=""
        it("Hacer click en la funcionalidad para crear tag y llenar formulario",()=>{    
            const navPage= new NavBarPage();
            const tagPage= new TagPage();
            const newTagPage= new  NewTagPage();
            //When I click on the tag function   
            cy.screenshot(`func2/v-3.41.1/esc2/e1`,{overwrite:true})
            navPage.getTagFunction().click();            
            //Then I should have a new tag button
            navPage.getTagFunction().should("exist");                      
            cy.wait(1000);
            cy.screenshot(`func2/v-3.41.1/esc2/e2`,{overwrite:true})  
            //And I click on the new tag button
            tagPage.getNewTagButton().click();
            cy.wait(1000);
            //Then I should have form to enter tag information and save button
            newTagPage.getInputName().should("exist")
            newTagPage.getInputSlug().should("exist")
            newTagPage.getInputDescription().should("exist")            
            cy.wait(1000);
            cy.screenshot(`func2/v-3.41.1/esc2/e3`,{overwrite:true})
            newTagPage.typeEmptyName();
            cy.wait(1000);
            cy.screenshot(`func2/v-3.41.1/esc2/e4`,{overwrite:true}) 
            //And I enter slug tag
            current_slug=faker.random.alphaNumeric(10)
            newTagPage.getInputSlug().focus().clear({force: true});
            cy.wait(1000);   
            cy.screenshot(`func2/v-3.41.1/esc2/e5`,{overwrite:true})          
            newTagPage.getInputSlug().type(current_slug,{force: true});
            cy.wait(1000);
            cy.screenshot(`func2/v-3.41.1/esc2/e6`,{overwrite:true}) 
            //And I enter tag description
            newTagPage.getInputDescription().type(faker.lorem.lines(1)); 
            
            cy.wait(1000);   
            cy.screenshot(`func2/v-3.41.1/esc2/e7`,{overwrite:true})       
            //And I click Save
            newTagPage.getSaveButton().click();
            cy.wait(2000);  
            cy.screenshot(`func2/v-3.41.1/esc2/e8`,{overwrite:true}) 
            //And I click on the tag function
            navPage.getTagFunction().click(); 
            //Then I should have a new tag with correct slug link            
            cy.screenshot(`func2/v-3.41.1/esc2/e9`,{overwrite:true})

            newTagPage.getErrorModal().first().click();

            //And I click on the leave button            
            cy.wait(1000);    
            cy.screenshot(`func2/v-3.41.1/esc2/e10`,{overwrite:true})
            //Then I should have a new tag with correct slug link
            tagPage.getTagBySlug(current_slug).should("exist"); 
            
        })       
    }  
)

//Escenario 3
describe('Con mi usuario de ghost creo un Tag con un nombre que ya exista', 
  () => {
    
        //And I click on the tag function   
        beforeEach("Hacer Login",()=>{
            cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
        })
        let current_slug="";
        let current_slug2=""
        
        it("Hacer click en la funcionalidad para crear tag y llenar formulario",()=>{           
            const navPage= new NavBarPage();
            const tagPage= new TagPage();
            const newTagPage= new  NewTagPage();
            //When I click on the tag function   
            cy.screenshot(`func2/v-3.41.1/esc3/e1`,{overwrite:true})
            navPage.getTagFunction().click();            
            //Then I should have a new tag button
            navPage.getTagFunction().should("exist");   
            cy.screenshot(`func2/v-3.41.1/esc3/e2`,{overwrite:true})         
            cy.wait(1000);
            //And I click on the new tag button
            tagPage.getNewTagButton().click()
            cy.wait(1000);
            //Then I should have form to enter tag information and save button
            newTagPage.getInputName().should("exist")
            newTagPage.getInputSlug().should("exist")
            newTagPage.getInputDescription().should("exist")
            cy.screenshot(`func2/v-3.41.1/esc3/e3`,{overwrite:true})
            cy.wait(1000);
            let current_name=faker.name.fullName();
            newTagPage.getInputName().type(current_name);
            cy.wait(1000);
            //And I enter slug tag
            current_slug=faker.random.alphaNumeric(10)
            newTagPage.getInputSlug().focus().clear({force: true});
            cy.wait(1000);            
            newTagPage.getInputSlug().type(current_slug,{force: true});
            cy.wait(1000);
            //And I enter tag description
            newTagPage.getInputDescription().type(faker.lorem.lines(1));   
            cy.screenshot(`func2/v-3.41.1/esc3/e4`,{overwrite:true})
            cy.wait(1000);         
            //And I click Save
            newTagPage.getSaveButton().click();
            cy.screenshot(`func2/v-3.41.1/esc3/e5`,{overwrite:true})
            cy.wait(2000);   
            //And I click on the tag function
            navPage.getTagFunction().click(); 
            //Then I should have a new tag with correct slug link
            cy.wait(1000);
            cy.screenshot(`func2/v-3.41.1/esc3/e6`,{overwrite:true})
            tagPage.getNewTagButton().click()
            cy.wait(1000);
             
            //Then I should have form to enter tag information and save button
            newTagPage.getInputName().should("exist")
            newTagPage.getInputSlug().should("exist")
            newTagPage.getInputDescription().should("exist")
            cy.screenshot(`func2/v-3.41.1/esc3/e7`,{overwrite:true})

            cy.wait(1000);

            newTagPage.getInputName().focus().clear({force:true});
            cy.wait(1000);            
            newTagPage.getInputName().type(current_name,{force:true});
            cy.wait(1000);
            //And I enter slug tag
            current_slug2=faker.random.alphaNumeric(10);
            newTagPage.getInputSlug().focus();
            cy.wait(1000);
            newTagPage.getInputSlug().clear({force: true});
            cy.wait(1000);
            newTagPage.getInputSlug().type(current_slug2,{force: true});
            cy.wait(1000);
            //And I enter tag description
            newTagPage.getInputDescription().type(faker.lorem.lines(1));  
            cy.screenshot(`func2/v-3.41.1/esc3/e8`,{overwrite:true}) 
            cy.wait(1000);         
            //And I click Save
            newTagPage.getSaveButton().click();
            cy.wait(1000); 
            navPage.getTagFunction().click(); 
            cy.wait(1000); 
            //Then I should have a new tag with correct slug link
            tagPage.getTagBySlug(current_slug2).should("exist");
            tagPage.getTagBySlug(current_slug).should("exist");
            cy.screenshot(`func2/v-3.41.1/esc3/e9`,{overwrite:true})
            cy.wait(1000); 
        })       
    }  
)