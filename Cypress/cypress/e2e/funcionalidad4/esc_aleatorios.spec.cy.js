//Crear una página
import {globalVariables} from "../../environment/credentials"
import NewPagePage from "../../pages/NewPagePage";
import NavBarPage from '../../pages/NavBarPage';
import PagePage from '../../pages/pagePage';
import { faker } from '@faker-js/faker';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

//Escenarios 1-6 aleatorios en archivo funcionalidad4.spec.cy
//Escenario 7 Crear una página con título de una palabra
describe('Con mi usuario de ghost quiero crear una página y que el título solo contenga una palabra', 
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
            cy.screenshot(`func4/v-3.41.1/esc7/e1`,{overwrite:true})            
            cy.wait(1000);
            pagePage.getNewPageButton().click()
            cy.screenshot(`func4/v-3.41.1/esc7/e2`,{overwrite:true})
            cy.wait(1000);
            newPagePage.getInputTitle().should("exist")
            newPagePage.getInputDescription().should("exist")
            cy.screenshot(`func4/v-3.41.1/esc7/e3`,{overwrite:true})
            cy.wait(1000);
            const title = faker.lorem.word();
            newPagePage.getInputTitle().type(title);
            cy.screenshot(`func4/v-3.41.1/esc7/e4`,{overwrite:true})
            cy.wait(1000);
            newPagePage.getInputDescription().click({force:true});
            cy.screenshot(`func4/v-3.41.1/esc1/e5`,{overwrite:true})   
            cy.wait(1000);         
            newPagePage.getSaveButton().click();
            cy.screenshot(`func4/v-3.41.1/esc1/e6`,{overwrite:true}) 
            cy.wait(1000);
            newPagePage.getInputPublish().click();
            cy.screenshot(`func4/v-3.41.1/esc1/e7`,{overwrite:true}) 
            cy.wait(1000);   
            navPage.getPageFunction().click(); 
            cy.screenshot(`func4/v-3.41.1/esc1/e8`,{overwrite:true}) 
        })       

    }
  
)

//Escenario 8 Crear una página con título de una letra
describe('Con mi usuario de ghost quiero crear una página y que el título solo contenga varias palabras', 
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
            cy.screenshot(`func4/v-3.41.1/esc8/e1`,{overwrite:true})            
            cy.wait(1000);
            pagePage.getNewPageButton().click()
            cy.screenshot(`func4/v-3.41.1/esc8/e2`,{overwrite:true})
            cy.wait(1000);
            newPagePage.getInputTitle().should("exist")
            newPagePage.getInputDescription().should("exist")
            cy.screenshot(`func4/v-3.41.1/esc8/e3`,{overwrite:true})
            cy.wait(1000);
            const title = faker.lorem.words(10);
            newPagePage.getInputTitle().type(title);
            cy.screenshot(`func4/v-3.41.1/esc8/e4`,{overwrite:true})
            cy.wait(1000);
            newPagePage.getInputDescription().click({force:true});
            cy.screenshot(`func4/v-3.41.1/esc8/e5`,{overwrite:true})   
            cy.wait(1000);         
            newPagePage.getSaveButton().click();
            cy.screenshot(`func4/v-3.41.1/esc8/e6`,{overwrite:true}) 
            cy.wait(1000);
            newPagePage.getInputPublish().click();
            cy.screenshot(`func4/v-3.41.1/esc8/e7`,{overwrite:true}) 
            cy.wait(1000);   
            navPage.getPageFunction().click(); 
            cy.screenshot(`func4/v-3.41.1/esc8/e8`,{overwrite:true}) 
        })       

    }
  
)

//Escenario 9 Crear una página con descripción de una palabra
describe('Con mi usuario de ghost quiero crear una página y que la descripción solo contenga una palabra', 
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
            cy.screenshot(`func4/v-3.41.1/esc9/e1`,{overwrite:true})            
            cy.wait(1000);
            pagePage.getNewPageButton().click()
            cy.screenshot(`func4/v-3.41.1/esc9/e2`,{overwrite:true})
            cy.wait(1000);
            newPagePage.getInputTitle().should("exist")
            newPagePage.getInputDescription().should("exist")
            cy.screenshot(`func4/v-3.41.1/esc9/e3`,{overwrite:true})
            cy.wait(1000);
            const description = faker.lorem.word();
            cy.screenshot(`func4/v-3.41.1/esc9/e4`,{overwrite:true})
            cy.wait(1000);
            newPagePage.getInputDescription().type(description);
            cy.screenshot(`func4/v-3.41.1/esc9/e5`,{overwrite:true})   
            cy.wait(1000);
            newPagePage.getInputTitle().click({force:true});
            cy.wait(1000);         
            newPagePage.getSaveButton().click();
            cy.screenshot(`func4/v-3.41.1/esc9/e6`,{overwrite:true}) 
            cy.wait(1000);
            newPagePage.getInputPublish().click();
            cy.screenshot(`func4/v-3.41.1/esc9/e7`,{overwrite:true}) 
            cy.wait(1000);   
            navPage.getPageFunction().click(); 
            cy.screenshot(`func4/v-3.41.1/esc9/e8`,{overwrite:true}) 
        })       

    }
  
)

//Escenario 10 Crear una página con descripción de 100 palabras
describe('Con mi usuario de ghost quiero crear una página y que la descripción contenga 100 palabras', 
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
            cy.screenshot(`func4/v-3.41.1/esc10/e1`,{overwrite:true})            
            cy.wait(1000);
            pagePage.getNewPageButton().click()
            cy.screenshot(`func4/v-3.41.1/esc10/e2`,{overwrite:true})
            cy.wait(1000);
            newPagePage.getInputTitle().should("exist")
            newPagePage.getInputDescription().should("exist")
            cy.screenshot(`func4/v-3.41.1/esc10/e3`,{overwrite:true})
            cy.wait(1000);
            const description = faker.lorem.words(100);
            cy.screenshot(`func4/v-3.41.1/esc10/e4`,{overwrite:true})
            cy.wait(1000);
            newPagePage.getInputDescription().type(description);
            cy.screenshot(`func4/v-3.41.1/esc10/e5`,{overwrite:true})   
            cy.wait(1000);
            newPagePage.getInputTitle().click({force:true});
            cy.wait(1000);         
            newPagePage.getSaveButton().click();
            cy.screenshot(`func4/v-3.41.1/esc10/e6`,{overwrite:true}) 
            cy.wait(1000);
            newPagePage.getInputPublish().click();
            cy.screenshot(`func4/v-3.41.1/esc10/e7`,{overwrite:true}) 
            cy.wait(1000);   
            navPage.getPageFunction().click(); 
            cy.screenshot(`func4/v-3.41.1/esc10/e8`,{overwrite:true}) 
        })       

    }
  
)

//Escenario 11 Crear una página con un párrafo de título
describe('Con mi usuario de ghost quiero crear una página y que el título contenga un párrafo', 
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
            cy.screenshot(`func4/v-3.41.1/esc11/e1`,{overwrite:true})            
            cy.wait(1000);
            pagePage.getNewPageButton().click()
            cy.screenshot(`func4/v-3.41.1/esc11/e2`,{overwrite:true})
            cy.wait(1000);
            newPagePage.getInputTitle().should("exist")
            newPagePage.getInputDescription().should("exist")
            cy.screenshot(`func4/v-3.41.1/esc11/e3`,{overwrite:true})
            cy.wait(1000);
            const title = faker.lorem.paragraph();
            newPagePage.getInputTitle().type(title);
            cy.screenshot(`func4/v-3.41.1/esc11/e4`,{overwrite:true})
            cy.wait(1000);
            newPagePage.getInputDescription().click({force:true});
            cy.screenshot(`func4/v-3.41.1/esc11/e5`,{overwrite:true})   
            cy.wait(1000);
            newPagePage.getInputTitle().click({force:true});
            cy.wait(1000);         
            newPagePage.getSaveButton().click();
            cy.screenshot(`func4/v-3.41.1/esc11/e6`,{overwrite:true}) 
            cy.wait(1000);
            newPagePage.getInputPublish().click();
            cy.screenshot(`func4/v-3.41.1/esc11/e7`,{overwrite:true}) 
            cy.wait(1000);   
            navPage.getPageFunction().click(); 
            cy.screenshot(`func4/v-3.41.1/esc11/e8`,{overwrite:true}) 
        })       

    }
  
)

//Escenario 12 Crear una página con un párrafo de descripción
describe('Con mi usuario de ghost quiero crear una página y que la descripción contenga un párrafo', 
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
            cy.screenshot(`func4/v-3.41.1/esc12/e1`,{overwrite:true})            
            cy.wait(1000);
            pagePage.getNewPageButton().click()
            cy.screenshot(`func4/v-3.41.1/esc12/e2`,{overwrite:true})
            cy.wait(1000);
            newPagePage.getInputTitle().should("exist")
            newPagePage.getInputDescription().should("exist")
            cy.screenshot(`func4/v-3.41.1/esc12/e3`,{overwrite:true})
            cy.wait(1000);
            const description = faker.lorem.paragraph();
            newPagePage.getInputTitle().type(title);
            cy.screenshot(`func4/v-3.41.1/esc12/e4`,{overwrite:true})
            cy.wait(1000);
            newPagePage.getInputDescription().type(description);
            cy.screenshot(`func4/v-3.41.1/esc12/e5`,{overwrite:true})   
            cy.wait(1000);
            newPagePage.getInputTitle().click({force:true});
            cy.wait(1000);         
            newPagePage.getSaveButton().click();
            cy.screenshot(`func4/v-3.41.1/esc12/e6`,{overwrite:true}) 
            cy.wait(1000);
            newPagePage.getInputPublish().click();
            cy.screenshot(`func4/v-3.41.1/esc12/e7`,{overwrite:true}) 
            cy.wait(1000);   
            navPage.getPageFunction().click(); 
            cy.screenshot(`func4/v-3.41.1/esc12/e8`,{overwrite:true}) 
        })       

    }
  
)