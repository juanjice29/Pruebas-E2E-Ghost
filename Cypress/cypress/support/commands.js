// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import {globalVariables, globalVariablesv4} from "../environment/credentials"
import NavBarPage from '../pages/NavBarPage';
import TagPage from '../pages/TagPage';
import NewTagPage from '../pages/NewTagPAge';
import StaffPage from "../pages/StaffPage";

Cypress.Commands.add('hacerClickEnFuncionalidad',(url_link)=>{
    cy.get(`a[href="#/${url_link}/"]`).first().click()
    cy.wait(1000);
})

Cypress.Commands.add('hacerLogin',
 (password,expectedUrl,expectedElem,esc=false) => {
    //Given the url
    cy.visit(globalVariables.baseUrl);       
    //And I wait for 2 seconds 
    cy.wait(2000)
    if(esc) cy.screenshot(`func1/v-4/${esc}/e1`,{overwrite:true});
    //And I enter login email    
    cy.get('#ember8').type(globalVariables.email);
    if(esc) cy.screenshot(`func1/v-4/${esc}/e2`,{overwrite:true});
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I enter the password
    cy.get('#ember10').type(password);
    if(esc) cy.screenshot(`func1/v-4/${esc}/e3`,{overwrite:true});
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I click on submit button
    if(esc){
        cy.get("#ember12").click().screenshot(`func1/v-4/${esc}/e4`,{overwrite:true});;
    }else{
        cy.get("#ember12").click();
    }
    
    //And I wait for 2 seconds
    cy.wait(2000);
    if(esc) cy.screenshot(`func1/v-4/${esc}/e5`,{overwrite:true});
    //Then url should end in #/site
    cy.url().should('equal',globalVariables.baseUrl+"#/"+expectedUrl)
    //Then navbar should exist
    cy.get(expectedElem).should("exist")
    if(esc) cy.screenshot(`func1/v-4/${esc}/e6`,{overwrite:true});
    cy.wait(2000);
  
})

Cypress.Commands.add('hacerLoginV4',
 (password,expectedUrl,expectedElem,esc=false) => {
    //Given the url
    cy.visit(globalVariablesv4.baseUrl)    
    //And I wait for 2 seconds 
    cy.wait(2000)
    if(esc) cy.screenshot(`func1/v-3.41.1/${esc}/e1`,{overwrite:true});
    //And I enter login email    
    cy.get('#ember7').type(globalVariablesv4.email);
    if(esc) cy.screenshot(`func1/v-3.41.1/${esc}/e2`,{overwrite:true});
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I enter the password
    cy.get('#ember9').type(password);
    if(esc) cy.screenshot(`func1/v-3.41.1/${esc}/e3`,{overwrite:true});
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I click on submit button
    if(esc){
        cy.get("#ember11").click().screenshot(`func1/v-3.41.1/${esc}/e4`,{overwrite:true})
    } else{
        cy.get("#ember11").click();
    }    
    //And I wait for 2 seconds
    cy.wait(2000);
    if(esc) cy.screenshot(`func1/v-3.41.1/${esc}/e5`,{overwrite:true});
    //Then url should end in #/site
    cy.url().should('equal',globalVariablesv4.baseUrl+"#/"+expectedUrl)
    //Then navbar should exist
    cy.get(expectedElem).should("exist")
    if(esc) cy.screenshot(`func1/v-3.41.1/${esc}/e6`,{overwrite:true});
    cy.wait(2000);
  
})

Cypress.Commands.add('hacerLoginCompleto',
 (email,password,expectedUrl,expectedElem,esc=false) => {
    //Given the url
    cy.visit(globalVariables.baseUrl);       
    //And I wait for 2 seconds 
    cy.wait(2000)
    if(esc) cy.screenshot(`func1/v-4/${esc}/e1`,{overwrite:true});
    //And I enter login email    
    cy.get('#ember8').type(email);
    if(esc) cy.screenshot(`func1/v-4/${esc}/e2`,{overwrite:true});
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I enter the password
    cy.get('#ember10').type(password);
    if(esc) cy.screenshot(`func1/v-4/${esc}/e3`,{overwrite:true});
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I click on submit button
    if(esc){
        cy.get("#ember12").click().screenshot(`func1/v-4/${esc}/e4`,{overwrite:true});;
    }else{
        cy.get("#ember12").click();
    }
    
    //And I wait for 2 seconds
    cy.wait(2000);
    if(esc) cy.screenshot(`func1/v-4/${esc}/e5`,{overwrite:true});
    //Then url should end in #/site
    cy.url().should('equal',globalVariables.baseUrl+"#/"+expectedUrl)
    //Then navbar should exist
    cy.get(expectedElem).should("exist")
    if(esc) cy.screenshot(`func1/v-4/${esc}/e6`,{overwrite:true});
    cy.wait(2000);
  
})
//Se crea un tag y se valida su existencia
Cypress.Commands.add('crearTag',(name,slug,description,color)=>{
    cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view");
    const navPage= new NavBarPage();
    const tagPage= new TagPage();
    const newTagPage= new  NewTagPage();
    navPage.getTagFunction().click();
    cy.wait(1000);
    tagPage.getNewTagButton().click();
    cy.wait(1000);
    newTagPage.getInputName().type(name,{force: true});
    cy.wait(1000);
    newTagPage.getInputSlug().focus().clear({force: true});
    newTagPage.getInputSlug().type(slug,{force: true});
    cy.wait(1000);
    newTagPage.getInputColor().type(color,{force:true});
    newTagPage.getInputDescription().type(description);
    cy.wait(1000);
    newTagPage.getSaveButton().click(); 
    cy.wait(1000);
    navPage.getTagFunction().click(); 
    tagPage.getTagBySlug(slug.replace(" ","-")).should("exist"); 
})
Cypress.Commands.add('crearTagVacio',()=>{
    cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view");
    const navPage= new NavBarPage();
    const tagPage= new TagPage();
    const newTagPage= new  NewTagPage();
    navPage.getTagFunction().click();
    cy.wait(1000);
    tagPage.getNewTagButton().click();
    cy.wait(1000);    
    newTagPage.getSaveButton().click(); 
    cy.wait(1000);
    navPage.getTagFunction().click(); 
    newTagPage.getErrorModal().should("exist"); 
})

