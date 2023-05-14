//Funcionalidad hacer Login
import {globalVariablesv4} from "../../environment/credentials"
import NewPagePage from "../../pages/NewPagePage";
import NavBarPage from '../../pages/NavBarPage';
import PagePage from '../../pages/pagePage';
import { faker } from '@faker-js/faker';

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
            cy.screenshot(`func4_V4/esc1/accion1`,{overwrite:true});         
            cy.wait(1000);
            pagePage.getNewPageButton().click()
            cy.screenshot(`func4_V4/esc1/accion2`,{overwrite:true});
            cy.wait(1000);
            newPagePage.getInputTitle().should("exist")
            newPagePage.getInputDescription().should("exist")
            cy.screenshot(`func4_V4/esc1/accion3`,{overwrite:true});
            cy.wait(1000);
            const title = faker.name.jobTitle();
            newPagePage.getInputTitle().type(title);
            cy.screenshot(`func4_V4/esc1/accion4`,{overwrite:true});
            cy.wait(1000);
            newPagePage.getInputDescription().type(faker.lorem.lines(1));   
            cy.screenshot(`func4_V4/esc1/accion5`,{overwrite:true});
            cy.wait(1000);         
            newPagePage.getPublishV4().click();
            cy.screenshot(`func4_V4/esc1/accion6`,{overwrite:true});
            cy.wait(1000);
            newPagePage.getSaveV4().click();
            cy.screenshot(`func4_V4/esc1/accion7`,{overwrite:true});
            cy.wait(1000);   
            navPage.getPageFunction().click(); 
            cy.screenshot(`func4_V4/esc1/accion8`,{overwrite:true});
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
            cy.screenshot(`func4_V4/esc2/accion1`,{overwrite:true});             
            cy.wait(1000);
            pagePage.getNewPageButton().click();
            cy.screenshot(`func4_V4/esc2/accion2`,{overwrite:true});   
            cy.wait(1000);
            newPagePage.getInputTitle().should("exist");
            cy.screenshot(`func4_V4/esc2/accion3`,{overwrite:true});   
            cy.wait(1000);
            newPagePage.getInputTitle().type(faker.name.jobTitle());
            cy.screenshot(`func4_V4/esc2/accion4`,{overwrite:true});   
            cy.wait(1000);
            newPagePage.getPublishV4().click();
            cy.screenshot(`func4_V4/esc2/accion5`,{overwrite:true});   
            cy.wait(1000);
            newPagePage.getSaveV4().click();
            cy.screenshot(`func4_V4/esc2/accion6`,{overwrite:true});   
            cy.wait(1000);   
            navPage.getPageFunction().click(); 
            cy.screenshot(`func4_V4/esc2/accion7`,{overwrite:true});   
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
            cy.screenshot(`func4_V4/esc3/accion1`,{overwrite:true});          
            cy.wait(1000);
            pagePage.getNewPageButton().click();
            cy.screenshot(`func4_V4/esc3/accion2`,{overwrite:true});   
            cy.wait(1000);
            newPagePage.getInputDescription().should("exist");
            cy.screenshot(`func4_V4/esc3/accion3`,{overwrite:true});   
            cy.wait(1000);
            newPagePage.getInputDescription().type(faker.lorem.lines(1));
            cy.screenshot(`func4_V4/esc3/accion4`,{overwrite:true});   
            cy.wait(1000);
            newPagePage.getPublishV4().click();
            cy.screenshot(`func4_V4/esc3/accion5`,{overwrite:true});   
            cy.wait(1000);
            newPagePage.getSaveV4().click();
            cy.screenshot(`func4_V4/esc3/accion6`,{overwrite:true});   
            cy.wait(1000);   
            navPage.getPageFunction().click(); 
            cy.screenshot(`func4_V4/esc3/accion7`,{overwrite:true});   
        })     
    }
)

//Escenario 5
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
            cy.screenshot(`func4_V4/esc5/accion1`,{overwrite:true});               
            cy.wait(1000);
            pagePage.getNewPageButton().click();
            cy.screenshot(`func4_V4/esc5/accion2`,{overwrite:true});  
            cy.wait(1000);
            newPagePage.getInputDescription().should("exist");
            cy.screenshot(`func4_V4/esc5/accion3`,{overwrite:true});  
            cy.wait(1000);
            newPagePage.getInputTitle().type(faker.name.jobTitle());
            cy.screenshot(`func4_V4/esc5/accion4`,{overwrite:true});  
            cy.wait(1000);
            newPagePage.getInputDescription().type(faker.lorem.lines(1)); 
            cy.screenshot(`func4_V4/esc5/accion5`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getSettingsV4().click();
            cy.screenshot(`func4_V4/esc5/accion6`,{overwrite:true});  
            cy.wait(1000);
            newPagePage.getTags().click();
            cy.screenshot(`func4_V4/esc5/accion7`,{overwrite:true});  
            cy.wait(1000);
            newPagePage.getTag().click();
            cy.screenshot(`func4_V4/esc5/accion8`,{overwrite:true});  
            cy.wait(1000);
            newPagePage.getCloseV4().click();
            cy.screenshot(`func4_V4/esc5/accion9`,{overwrite:true});  
            cy.wait(1000);         
            newPagePage.getPublishV4().click();
            cy.screenshot(`func4_V4/esc5/accion10`,{overwrite:true});  
            cy.wait(1000);
            newPagePage.getSaveV4().click();
            cy.screenshot(`func4_V4/esc5/accion11`,{overwrite:true});  
            cy.wait(1000);   
            navPage.getPageFunction().click(); 
            cy.screenshot(`func4_V4/esc5/accion12`,{overwrite:true});  
        })     
    }
)

//Escenario 6
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
            cy.screenshot(`func4_V4/esc6/accion1`,{overwrite:true});           
            cy.wait(1000);
            pagePage.getNewPageButton().click();
            cy.screenshot(`func4_V4/esc6/accion2`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getInputDescription().should("exist");
            cy.screenshot(`func4_V4/esc6/accion3`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getInputTitle().type(faker.name.jobTitle());
            cy.screenshot(`func4_V4/esc6/accion4`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getInputDescription().type(faker.lorem.lines(1));  
            cy.screenshot(`func4_V4/esc6/accion5`,{overwrite:true});     
            cy.wait(1000);
            newPagePage.getSettingsV4().click();
            cy.screenshot(`func4_V4/esc6/accion6`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getTags().click();
            cy.screenshot(`func4_V4/esc6/accion7`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getTag().click();
            cy.screenshot(`func4_V4/esc6/accion8`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getExcerpt().type(faker.lorem.lines(1));
            cy.screenshot(`func4_V4/esc6/accion9`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getCloseV4().click();
            cy.screenshot(`func4_V4/esc6/accion10`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getPublishV4().click();
            cy.screenshot(`func4_V4/esc6/accion11`,{overwrite:true});    
            cy.wait(1000);
            newPagePage.getSaveV4().click();
            cy.screenshot(`func4_V4/esc6/accion12`,{overwrite:true});    
            cy.wait(1000);
            navPage.getPageFunction().click(); 
            cy.screenshot(`func4_V4/esc6/accion13`,{overwrite:true});    
        })     
    }
)

