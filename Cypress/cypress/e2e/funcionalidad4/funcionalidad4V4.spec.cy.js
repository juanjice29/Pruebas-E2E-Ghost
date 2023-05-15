//Funcionalidad hacer Login
import {globalVariablesv4} from "../../environment/credentials"
import NewPagePage from "../../pages/NewPagePage";
import NavBarPage from '../../pages/NavBarPage';
import PagePage from '../../pages/pagePage';
import { faker } from '@faker-js/faker';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

//Escenario 1
describe('Con mi usuario de ghost quiero crear una página', 
  () => {
    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLoginV4(globalVariablesv4.password,"dashboard","nav.gh-nav"); 
    })
        it("Hacer click en la funcionalidad para crear pagina y llenar formulario",()=>{   
            const navPage=new NavBarPage();
            const newPagePage= new NewPagePage();
            const pagePage=new PagePage();
            navPage.getPageFunction().click();            
            navPage.getPageFunction().should("exist");   
            cy.screenshot(`func4/v-4/esc1/e1`,{overwrite:true});         
            cy.wait(1000);
            pagePage.getNewPageButton().click()
            cy.screenshot(`func4/v-4/esc1/e2`,{overwrite:true});
            cy.wait(1000);
            newPagePage.getInputTitle().should("exist")
            newPagePage.getInputDescription().should("exist")
            cy.screenshot(`func4/v-4/esc1/e3`,{overwrite:true});
            cy.wait(1000);
            const title = faker.name.jobTitle();
            newPagePage.getInputTitle().type(title);
            cy.screenshot(`func4/v-4/esc1/e4`,{overwrite:true});
            cy.wait(1000);
            newPagePage.getInputDescription().type(faker.lorem.lines(1));   
            cy.screenshot(`func4/v-4/esc1/e5`,{overwrite:true});
            cy.wait(1000);         
            newPagePage.getPublishV4().click();
            cy.screenshot(`func4/v-4/esc1/e6`,{overwrite:true});
            cy.wait(1000);
            newPagePage.getSaveV4().click();
            cy.screenshot(`func4/v-4/esc1/e7`,{overwrite:true});
            cy.wait(1000);   
            navPage.getPageFunction().click(); 
            cy.screenshot(`func4/v-4/esc1/e8`,{overwrite:true});
        })       

    }
  
)

//Escenario 2
describe('Con mi usuario de ghost quiero crear una página sin descripción', 
  () => {
    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLoginV4(globalVariablesv4.password,"dashboard","nav.gh-nav"); 
    })

        it("Hacer click en la funcionalidad para crear pagina y llenar formulario",()=>{   
            const navPage=new NavBarPage();
            const newPagePage= new NewPagePage();
            const pagePage=new PagePage();
            navPage.getPageFunction().click();            
            navPage.getPageFunction().should("exist");
            cy.screenshot(`func4/v-4/esc2/e1`,{overwrite:true});             
            cy.wait(1000);
            pagePage.getNewPageButton().click();
            cy.screenshot(`func4/v-4/esc2/e2`,{overwrite:true});   
            cy.wait(1000);
            newPagePage.getInputTitle().should("exist");
            cy.screenshot(`func4/v-4/esc2/e3`,{overwrite:true});   
            cy.wait(1000);
            newPagePage.getInputTitle().type(faker.name.jobTitle());
            cy.screenshot(`func4/v-4/esc2/e4`,{overwrite:true});   
            cy.wait(1000);
            cy.screenshot(`func4/v-4/esc2/e5`,{overwrite:true});
            newPagePage.getPublishV4().should("exist");            
        })     
    }
)

//Escenario 3
describe('Con mi usuario de ghost quiero crear una página sin título', 
  () => {
    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLoginV4(globalVariablesv4.password,"dashboard","nav.gh-nav"); 
    })

        it("Hacer click en la funcionalidad para crear pagina y llenar formulario",()=>{   
            const navPage=new NavBarPage();
            const newPagePage= new NewPagePage();
            const pagePage=new PagePage();
            navPage.getPageFunction().click();            
            navPage.getPageFunction().should("exist");  
            cy.screenshot(`func4/v-4/esc3/e1`,{overwrite:true});          
            cy.wait(1000);
            pagePage.getNewPageButton().click();
            cy.screenshot(`func4/v-4/esc3/e2`,{overwrite:true});   
            cy.wait(1000);
            newPagePage.getInputDescription().should("exist");
            cy.screenshot(`func4/v-4/esc3/e3`,{overwrite:true});   
            cy.wait(1000);
            newPagePage.getInputDescription().type(faker.lorem.lines(1));
            cy.screenshot(`func4/v-4/esc3/e4`,{overwrite:true});   
            cy.wait(1000);
            newPagePage.getPublishV4().click();
            cy.screenshot(`func4/v-4/esc3/e5`,{overwrite:true});   
            cy.wait(1000);
            newPagePage.getSaveV4().click();
            cy.screenshot(`func4/v-4/esc3/e6`,{overwrite:true});   
            cy.wait(1000);   
            navPage.getPageFunction().click(); 
            cy.screenshot(`func4/v-4/esc3/e7`,{overwrite:true});   
        })     
    }
)

//Escenario 4
describe('Con mi usuario de ghost quiero crear un post y asignarla a un tag', 
  () => {
    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLoginV4(globalVariablesv4.password,"dashboard","nav.gh-nav"); 
    })

        it("Hacer click en la funcionalidad para crear pagina y llenar formulario",()=>{   
            const navPage=new NavBarPage();
            const newPagePage= new NewPagePage();
            const pagePage=new PagePage();
            navPage.getPageFunction().click();            
            navPage.getPageFunction().should("exist");
            cy.screenshot(`func4/v-4/esc4/e1`,{overwrite:true});               
            cy.wait(1000);
            pagePage.getNewPageButton().click();
            cy.screenshot(`func4/v-4/esc4/e2`,{overwrite:true});  
            cy.wait(1000);
            newPagePage.getInputDescription().should("exist");
            cy.screenshot(`func4/v-4/esc4/e3`,{overwrite:true});  
            cy.wait(1000);
            newPagePage.getInputTitle().type(faker.name.jobTitle());
            cy.screenshot(`func4/v-4/esc4/e4`,{overwrite:true});  
            cy.wait(1000);
            newPagePage.getInputDescription().type(faker.lorem.lines(1)); 
            cy.screenshot(`func4/v-4/esc4/e5`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getSettingsV4().click();
            cy.screenshot(`func4/v-4/esc4/e6`,{overwrite:true});  
            cy.wait(1000);
            newPagePage.getTags().click();
            cy.screenshot(`func4/v-4/esc4/e7`,{overwrite:true});  
            cy.wait(1000);
            newPagePage.getTag().then($inputs => {
                var randomInput = $inputs.get(getRandomInt(0, $inputs.length))
                if (!Cypress.dom.isHidden(randomInput)) {
                  cy.wrap(randomInput).click({ force: true });
                }
              })
            cy.screenshot(`func4/v-4/esc4/e8`,{overwrite:true});  
            cy.wait(1000);
            newPagePage.getCloseV4().click();
            cy.screenshot(`func4/v-4/esc4/e9`,{overwrite:true});  
            cy.wait(1000);         
            newPagePage.getPublishV4().click();
            cy.screenshot(`func4/v-4/esc4/e10`,{overwrite:true});  
            cy.wait(1000);
            newPagePage.getSaveV4().click();
            cy.screenshot(`func4/v-4/esc4/e11`,{overwrite:true});  
            cy.wait(1000);   
            navPage.getPageFunction().click(); 
            cy.screenshot(`func4/v-4/esc4/e12`,{overwrite:true});  
        })     
    }
)

//Escenario 5
describe('Con mi usuario de ghost quiero crear una página y asignarla a un tag, usuario y extracto', 
  () => {
    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLoginV4(globalVariablesv4.password,"dashboard","nav.gh-nav"); 
    })

        it("Hacer click en la funcionalidad para crear pagina y llenar formulario",()=>{   
            const navPage=new NavBarPage();
            const newPagePage= new NewPagePage();
            const pagePage=new PagePage();
            navPage.getPageFunction().click();            
            navPage.getPageFunction().should("exist");   
            cy.screenshot(`func4/v-4/esc5/e1`,{overwrite:true});           
            cy.wait(1000);
            pagePage.getNewPageButton().click();
            cy.screenshot(`func4/v-4/esc5/e2`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getInputDescription().should("exist");
            cy.screenshot(`func4/v-4/esc5/e3`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getInputTitle().type(faker.name.jobTitle());
            cy.screenshot(`func4/v-4/esc5/e4`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getInputDescription().type(faker.lorem.lines(1));  
            cy.screenshot(`func4/v-4/esc5/e5`,{overwrite:true});     
            cy.wait(1000);
            newPagePage.getSettingsV4().click();
            cy.screenshot(`func4/v-4/esc5/e6`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getTags().click();
            cy.screenshot(`func4/v-4/esc5/e7`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getTag().then($inputs => {
                var randomInput = $inputs.get(getRandomInt(0, $inputs.length))
                if (!Cypress.dom.isHidden(randomInput)) {
                  cy.wrap(randomInput).click({ force: true });
                }
              })
            cy.screenshot(`func4/v-4/esc5/e8`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getExcerpt().type(faker.lorem.lines(1));
            cy.screenshot(`func4/v-4/esc5/e9`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getCloseV4().click();
            cy.screenshot(`func4/v-4/esc5/e10`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getPublishV4().click();
            cy.screenshot(`func4/v-4/esc5/e11`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getSaveV4().click();
            cy.screenshot(`func4/v-4/esc5/e12`,{overwrite:true});    
            cy.wait(1000);
            navPage.getPageFunction().click(); 
            cy.screenshot(`func4/v-4/esc5/e13`,{overwrite:true});    
        })     
    }
)

