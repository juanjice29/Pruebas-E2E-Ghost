//Crear una página
import {globalVariables} from "../../environment/credentials"
import NewPagePage from "../../pages/NewPagePage";
import NavBarPage from '../../pages/NavBarPage';
import PagePage from '../../pages/pagePage';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

const dato_character = require("../datosf4/character.json");
const dato_paragraph = require("../datosf4/paragraph.json");
const dato_sc = require("../datosf4/specialCharacter.json");
const dato_word = require("../datosf4/word.json");
const dato_words = require("../datosf4/words.json");

//Escenario 1
describe(`Con mi usuario de ghost quiero crear una página y que el título solo contenga una letra`,
    () => {

    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })

    it(`Hacer click en la funcionalidad para crear pagina y llenar formulario`, ()=> {

        let variable = new String();
        let i = new Number();
        const navPage=new NavBarPage();
        const newPagePage= new NewPagePage();
        const pagePage=new PagePage();

        i = getRandomInt(1, dato_character.length);
        variable = dato_character[i].Data;

        navPage.getPageFunction().click();            
        navPage.getPageFunction().should("exist");
        cy.screenshot(`func4/v-3.41.1/apriori/esc1/e1`,{overwrite:true})            
        cy.wait(1000);
        pagePage.getNewPageButton().click()
        cy.screenshot(`func4/v-3.41.1/apriori/esc1/e2`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().should("exist")
        newPagePage.getInputDescription().should("exist")
        cy.screenshot(`func4/v-3.41.1/apriori/esc1/e3`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().type(variable);
        cy.screenshot(`func4/v-3.41.1/apriori/esc1/e4`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputDescription().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc1/e5`,{overwrite:true})   
        cy.wait(1000);         
        newPagePage.getSaveButton().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc1/e6`,{overwrite:true}) 
        cy.wait(1000);
        newPagePage.getInputPublish().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc1/e7`,{overwrite:true}) 
        cy.wait(1000);   
        navPage.getPageFunction().click({force:true}); 
        cy.screenshot(`func4/v-3.41.1/apriori/esc1/e8`,{overwrite:true}) 
    })
})

//Escenario 2
describe(`Con mi usuario de ghost quiero crear una página y que el título contenga un párrafo`,
    () => {

    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })

    it(`Hacer click en la funcionalidad para crear pagina y llenar formulario`, ()=> {

        let variable = new String();
        let i = new Number();
        const navPage=new NavBarPage();
        const newPagePage= new NewPagePage();
        const pagePage=new PagePage();

        i = getRandomInt(1, dato_paragraph.length);
        variable = dato_paragraph[i].id;

        navPage.getPageFunction().click();            
        navPage.getPageFunction().should("exist");
        cy.screenshot(`func4/v-3.41.1/apriori/esc2/e1`,{overwrite:true})            
        cy.wait(1000);
        pagePage.getNewPageButton().click()
        cy.screenshot(`func4/v-3.41.1/apriori/esc2/e2`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().should("exist")
        newPagePage.getInputDescription().should("exist")
        cy.screenshot(`func4/v-3.41.1/apriori/esc2/e3`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().scrollIntoView().focus().type(variable);
        cy.screenshot(`func4/v-3.41.1/apriori/esc2/e4`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputDescription().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc2/e5`,{overwrite:true})   
        cy.wait(1000);         
        newPagePage.getSaveButton().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc2/e6`,{overwrite:true}) 
        cy.wait(1000);
        newPagePage.getInputPublish().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc2/e7`,{overwrite:true}) 
        cy.wait(1000);   
        navPage.getPageFunction().click({force:true}); 
        cy.screenshot(`func4/v-3.41.1/apriori/esc2/e8`,{overwrite:true}) 
    })
})

//Escenario 3
describe(`Con mi usuario de ghost quiero crear una página y que el título contenga caracteres especiales`,
    () => {

    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })

    it(`Hacer click en la funcionalidad para crear pagina y llenar formulario`, ()=> {

        let variable = new String();
        let i = new Number();
        const navPage=new NavBarPage();
        const newPagePage= new NewPagePage();
        const pagePage=new PagePage();

        i = getRandomInt(1, dato_sc.length);
        variable = dato_sc[i].Data;

        navPage.getPageFunction().click();            
        navPage.getPageFunction().should("exist");
        cy.screenshot(`func4/v-3.41.1/apriori/esc3/e1`,{overwrite:true})            
        cy.wait(1000);
        pagePage.getNewPageButton().click()
        cy.screenshot(`func4/v-3.41.1/apriori/esc3/e2`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().should("exist")
        newPagePage.getInputDescription().should("exist")
        cy.screenshot(`func4/v-3.41.1/apriori/esc3/e3`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().type(variable);
        cy.screenshot(`func4/v-3.41.1/apriori/esc3/e4`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputDescription().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc3/e5`,{overwrite:true})   
        cy.wait(1000);         
        newPagePage.getSaveButton().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc3/e6`,{overwrite:true}) 
        cy.wait(1000);
        newPagePage.getInputPublish().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc3/e7`,{overwrite:true}) 
        cy.wait(1000);   
        navPage.getPageFunction().click({force:true}); 
        cy.screenshot(`func4/v-3.41.1/apriori/esc3/e8`,{overwrite:true}) 
    })
})

//Escenario 4
describe(`Con mi usuario de ghost quiero crear una página y que el título contenga una palabra`,
    () => {

    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })

    it(`Hacer click en la funcionalidad para crear pagina y llenar formulario`, ()=> {

        let variable = new String();
        let i = new Number();
        const navPage=new NavBarPage();
        const newPagePage= new NewPagePage();
        const pagePage=new PagePage();

        i = getRandomInt(1, dato_word.length);
        variable = dato_word[i].Title;

        navPage.getPageFunction().click();            
        navPage.getPageFunction().should("exist");
        cy.screenshot(`func4/v-3.41.1/apriori/esc4/e1`,{overwrite:true})            
        cy.wait(1000);
        pagePage.getNewPageButton().click()
        cy.screenshot(`func4/v-3.41.1/apriori/esc4/e2`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().should("exist")
        newPagePage.getInputDescription().should("exist")
        cy.screenshot(`func4/v-3.41.1/apriori/esc4/e3`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().type(variable);
        cy.screenshot(`func4/v-3.41.1/apriori/esc4/e4`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputDescription().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc4/e5`,{overwrite:true})   
        cy.wait(1000);         
        newPagePage.getSaveButton().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc4/e6`,{overwrite:true}) 
        cy.wait(1000);
        newPagePage.getInputPublish().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc4/e7`,{overwrite:true}) 
        cy.wait(1000);   
        navPage.getPageFunction().click({force:true}); 
        cy.screenshot(`func4/v-3.41.1/apriori/esc4/e8`,{overwrite:true}) 
    })
})

//Escenario 5
describe(`Con mi usuario de ghost quiero crear una página y que el título contenga varias palabras`,
    () => {

    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })

    it(`Hacer click en la funcionalidad para crear pagina y llenar formulario`, ()=> {

        let variable = new String();
        let i = new Number();
        const navPage=new NavBarPage();
        const newPagePage= new NewPagePage();
        const pagePage=new PagePage();

        i = getRandomInt(1, dato_words.length);
        variable = dato_words[i].id;

        navPage.getPageFunction().click();            
        navPage.getPageFunction().should("exist");
        cy.screenshot(`func4/v-3.41.1/apriori/esc5/e1`,{overwrite:true})            
        cy.wait(1000);
        pagePage.getNewPageButton().click()
        cy.screenshot(`func4/v-3.41.1/apriori/esc5/e2`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().should("exist")
        newPagePage.getInputDescription().should("exist")
        cy.screenshot(`func4/v-3.41.1/apriori/esc5/e3`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().type(variable);
        cy.screenshot(`func4/v-3.41.1/apriori/esc5/e4`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputDescription().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc5/e5`,{overwrite:true})   
        cy.wait(1000);         
        newPagePage.getSaveButton().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc5/e6`,{overwrite:true}) 
        cy.wait(1000);
        newPagePage.getInputPublish().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc5/e7`,{overwrite:true}) 
        cy.wait(1000);   
        navPage.getPageFunction().click({force:true}); 
        cy.screenshot(`func4/v-3.41.1/apriori/esc5/e8`,{overwrite:true}) 
    })
})

//Escenario 6
describe(`Con mi usuario de ghost quiero crear una página y que la descripción solo contenga una letra`,
    () => {

    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })

    it(`Hacer click en la funcionalidad para crear pagina y llenar formulario`, ()=> {

        let variable = new String();
        let i = new Number();
        const navPage=new NavBarPage();
        const newPagePage= new NewPagePage();
        const pagePage=new PagePage();

        i = getRandomInt(1, dato_character.length);
        variable = dato_character[i].Data;

        navPage.getPageFunction().click();            
        navPage.getPageFunction().should("exist");
        cy.screenshot(`func4/v-3.41.1/apriori/esc6/e1`,{overwrite:true})            
        cy.wait(1000);
        pagePage.getNewPageButton().click()
        cy.screenshot(`func4/v-3.41.1/apriori/esc6/e2`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().should("exist")
        newPagePage.getInputDescription().should("exist")
        cy.screenshot(`ffunc4/v-3.41.1/apriori/esc6/e3`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc6/e4`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputDescription().type(variable);
        cy.screenshot(`func4/v-3.41.1/apriori/esc6/e5`,{overwrite:true})   
        cy.wait(1000);         
        newPagePage.getSaveButton().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc6/e6`,{overwrite:true}) 
        cy.wait(1000);
        newPagePage.getInputPublish().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc6/e7`,{overwrite:true}) 
        cy.wait(1000);   
        navPage.getPageFunction().click({force:true}); 
        cy.screenshot(`func4/v-3.41.1/apriori/esc6/e8`,{overwrite:true}) 
    })
})

//Escenario 7
describe(`Con mi usuario de ghost quiero crear una página y que la descripción contenga un párrafo`,
    () => {

    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })

    it(`Hacer click en la funcionalidad para crear pagina y llenar formulario`, ()=> {

        let variable = new String();
        let i = new Number();
        const navPage=new NavBarPage();
        const newPagePage= new NewPagePage();
        const pagePage=new PagePage();

        i = getRandomInt(1, dato_paragraph.length);
        variable = dato_paragraph[i].id;

        navPage.getPageFunction().click();            
        navPage.getPageFunction().should("exist");
        cy.screenshot(`func4/v-3.41.1/apriori/esc7/e1`,{overwrite:true})            
        cy.wait(1000);
        pagePage.getNewPageButton().click()
        cy.screenshot(`func4/v-3.41.1/apriori/esc7/e2`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().should("exist")
        newPagePage.getInputDescription().should("exist")
        cy.screenshot(`func4/v-3.41.1/apriori/esc7/e3`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc7/e4`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputDescription().type(variable);
        cy.screenshot(`func4/v-3.41.1/apriori/esc7/e5`,{overwrite:true})   
        cy.wait(1000);         
        newPagePage.getSaveButton().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc7/e6`,{overwrite:true}) 
        cy.wait(1000);
        newPagePage.getInputPublish().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc7/e7`,{overwrite:true}) 
        cy.wait(1000);   
        navPage.getPageFunction().click({force:true}); 
        cy.screenshot(`func4/v-3.41.1/apriori/esc7/e8`,{overwrite:true}) 
    })
})

//Escenario 8
describe(`Con mi usuario de ghost quiero crear una página y que la descripción contenga una serie de caracteres especiales`,
    () => {

    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })

    it(`Hacer click en la funcionalidad para crear pagina y llenar formulario`, ()=> {

        let variable = new String();
        let i = new Number();
        const navPage=new NavBarPage();
        const newPagePage= new NewPagePage();
        const pagePage=new PagePage();

        i = getRandomInt(1, dato_sc.length);
        variable = dato_sc[i].Data;

        navPage.getPageFunction().click();            
        navPage.getPageFunction().should("exist");
        cy.screenshot(`func4/v-3.41.1/apriori/esc8/e1`,{overwrite:true})            
        cy.wait(1000);
        pagePage.getNewPageButton().click()
        cy.screenshot(`func4/v-3.41.1/apriori/esc8/e2`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().should("exist")
        newPagePage.getInputDescription().should("exist")
        cy.screenshot(`func4/v-3.41.1/apriori/esc8/e3`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc8/e4`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputDescription().type(variable);
        cy.screenshot(`func4/v-3.41.1/apriori/esc8/e5`,{overwrite:true})   
        cy.wait(1000);         
        newPagePage.getSaveButton().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc8/e6`,{overwrite:true}) 
        cy.wait(1000);
        newPagePage.getInputPublish().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc8/e7`,{overwrite:true}) 
        cy.wait(1000);   
        navPage.getPageFunction().click({force:true}); 
        cy.screenshot(`func4/v-3.41.1/apriori/esc8/e8`,{overwrite:true}) 
    })
})

//Escenario 9
describe(`Con mi usuario de ghost quiero crear una página y que la descripción contenga una palabra`,
    () => {

    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })

    it(`Hacer click en la funcionalidad para crear pagina y llenar formulario`, ()=> {

        let variable = new String();
        let i = new Number();
        const navPage=new NavBarPage();
        const newPagePage= new NewPagePage();
        const pagePage=new PagePage();

        i = getRandomInt(1, dato_word.length);
        variable = dato_word[i].Title;

        navPage.getPageFunction().click();            
        navPage.getPageFunction().should("exist");
        cy.screenshot(`func4/v-3.41.1/apriori/esc9/e1`,{overwrite:true})            
        cy.wait(1000);
        pagePage.getNewPageButton().click()
        cy.screenshot(`func4/v-3.41.1/apriori/esc9/e2`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().should("exist")
        newPagePage.getInputDescription().should("exist")
        cy.screenshot(`func4/v-3.41.1/apriori/esc9/e3`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc9/e4`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputDescription().type(variable);
        cy.screenshot(`func4/v-3.41.1/apriori/esc9/e5`,{overwrite:true})   
        cy.wait(1000);         
        newPagePage.getSaveButton().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc9/e6`,{overwrite:true}) 
        cy.wait(1000);
        newPagePage.getInputPublish().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc9/e7`,{overwrite:true}) 
        cy.wait(1000);   
        navPage.getPageFunction().click({force:true}); 
        cy.screenshot(`func4/v-3.41.1/apriori/esc9/e8`,{overwrite:true}) 
    })
})

//Escenario 10
describe(`Con mi usuario de ghost quiero crear una página y que la descripción contenga una palabra`,
    () => {

    beforeEach("Hacer Login",()=>{
        //Given I navigate to page "http://localhost:3001/ghost/#/signin"
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
    })

    it(`Hacer click en la funcionalidad para crear pagina y llenar formulario`, ()=> {

        let variable = new String();
        let i = new Number();
        const navPage=new NavBarPage();
        const newPagePage= new NewPagePage();
        const pagePage=new PagePage();

        i = getRandomInt(1, dato_words.length);
        variable = dato_words[i].id;

        navPage.getPageFunction().click();            
        navPage.getPageFunction().should("exist");
        cy.screenshot(`func4/v-3.41.1/apriori/esc10/e1`,{overwrite:true})            
        cy.wait(1000);
        pagePage.getNewPageButton().click()
        cy.screenshot(`func4/v-3.41.1/apriori/esc10/e2`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().should("exist")
        newPagePage.getInputDescription().should("exist")
        cy.screenshot(`func4/v-3.41.1/apriori/esc10/e3`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputTitle().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc10/e4`,{overwrite:true})
        cy.wait(1000);
        newPagePage.getInputDescription().type(variable);
        cy.screenshot(`func4/v-3.41.1/apriori/esc10/e5`,{overwrite:true})   
        cy.wait(1000);         
        newPagePage.getSaveButton().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc10/e6`,{overwrite:true}) 
        cy.wait(1000);
        newPagePage.getInputPublish().click({force:true});
        cy.screenshot(`func4/v-3.41.1/apriori/esc10/e7`,{overwrite:true}) 
        cy.wait(1000);   
        navPage.getPageFunction().click({force:true}); 
        cy.screenshot(`func4/v-3.41.1/apriori/esc10/e8`,{overwrite:true}) 
    })
})