import {globalVariables} from "../../environment/credentials"
import { faker } from '@faker-js/faker';
import StaffPage from "../../pages/StaffPage";
import NavBarPage from "../../pages/NavBarPage";
 //Funcionalidad Enviar e-mail de invitacion al staff 
//Escenario 1

describe('Con mi usuario de ghost quiero enviar una invitacion a un email', 
  () => {
    
        beforeEach("Hacer Login",()=>{
            cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
        })
        it("Hacer click en la funcionalidad para crear tag y llenar formulario",()=>{       
            //And I click on the staff function    
            const navPage= new NavBarPage();
            const staffPage= new StaffPage();
            
            navPage.getStaffFunction().click();  
            cy.screenshot(`func3/esc1/e1`,{overwrite:true})
            cy.wait(1000);
            //Then A save button should exist
            staffPage.getInvitePeople().should("exist")
            cy.wait(1000);
            //And I click on add new tag
            staffPage.getInvitePeople().click()            
            cy.wait(1000);
            cy.screenshot(`func3/esc1/e2`,{overwrite:true})
            //Then A form should esxist
            staffPage.getInviteForm().should("exist");
            cy.wait(1000);
            //And I enter an email
            staffPage.getEmailInput().type(faker.internet.email());
            cy.wait(1000);
            //And I save the invitation
            staffPage.getSendInvitation().click();
            cy.wait(1000);
            cy.screenshot(`func3/esc1/e3`,{overwrite:true})
            //Then An Error must exist
            staffPage.getAlertMessage().should("exist");


        })

})

//Escenario 2

describe('Con mi usuario de ghost quiero enviar una invitacion a un email con email invalido', 
  () => {
    
        //And I click on the tag function   
        beforeEach("Hacer Login",()=>{
            cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
        })
        it("Hacer click en la funcionalidad para crear tag y llenar formulario",()=>{           
            const navPage= new NavBarPage();
            const staffPage= new StaffPage();

            navPage.getStaffFunction().click();  
            cy.wait(1000);
            cy.screenshot(`func3/esc2/e1`,{overwrite:true})
            //Then A save button should exist
            staffPage.getInvitePeople().should("exist")
            cy.wait(1000);
            //And I click on add new tag
            staffPage.getInvitePeople().click()
            cy.wait(1000);
            cy.screenshot(`func3/esc2/e2`,{overwrite:true})
            //Then A form should esxist
            staffPage.getInviteForm().should("exist");
            cy.wait(1000);
            //And I enter an email
            staffPage.getEmailInput().type(faker.internet.email());
            cy.wait(1000);
            //And I save the invitation
            staffPage.getSendInvitation().click();
            cy.wait(1000);
            cy.screenshot(`func3/esc2/e3`,{overwrite:true})
            //Then An Error must exist
            staffPage.getAlertInvalidUser().should("exist");

        })

})


//Escenario 3

describe('Con mi usuario de ghost quiero enviar una invitacion a un email ya existente en las invitaciones', 
  () => {
    
        //And I click on the tag function   
        beforeEach("Hacer Login",()=>{
            cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
        })
        it("Hacer click en la funcionalidad para crear tag y llenar formulario",()=>{           
            const navPage= new NavBarPage();
            const staffPage= new StaffPage();

            navPage.getStaffFunction().click();  
            cy.wait(1000);
            cy.screenshot(`func3/esc3/e1`,{overwrite:true})
            //Then A save button should exist
            staffPage.getInvitePeople().should("exist")
            cy.wait(1000);
            //And I click on add new tag
            staffPage.getInvitePeople().click()
            cy.wait(1000);
            cy.screenshot(`func3/esc3/e2`,{overwrite:true})
            //Then A form should esxist
            staffPage.getInviteForm().should("exist");
            cy.wait(1000);            
            let existing_email=faker.internet.email();            
            staffPage.getEmailInput().type(existing_email);
            cy.wait(1000);
            //And I save the invitation
            staffPage.getSendInvitation().click();
            cy.wait(1000);
            cy.screenshot(`func3/esc3/e3`,{overwrite:true})
            //Then An Error must exist
            staffPage.getAlertInvalidUser().should("exist");
            navPage.getStaffFunction().click();  
            cy.wait(1000);
            staffPage.getInvitePeople().click()
            staffPage.getEmailInput().first().type(existing_email);           
            staffPage.getSendInvitation().click();
            cy.wait(3000);
            cy.screenshot(`func3/esc3/e4`,{overwrite:true})
            staffPage.getAlertMessageAlready().should("exist");


        })

})

//Escenario 4

describe('Con mi usuario de ghost quiero enviar una invitacion a un email con un rol dirente', 
  () => {
    
        //And I click on the tag function   
        beforeEach("Hacer Login",()=>{
            cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view"); 
        })
        it("Hacer click en la funcionalidad para crear tag y llenar formulario",()=>{           

            const navPage= new NavBarPage();
            const staffPage= new StaffPage();

            navPage.getStaffFunction().click();  
            cy.wait(1000);
            cy.screenshot(`func3/esc4/e1`,{overwrite:true})
            //Then A save button should exist
            staffPage.getInvitePeople().should("exist")
            cy.wait(1000);
            //And I click on add new tag
            staffPage.getInvitePeople().click()
            cy.wait(1000);
            cy.screenshot(`func3/esc4/e2`,{overwrite:true})
            //Then A form should esxist
            staffPage.getInviteForm().should("exist");
            cy.wait(1000);
            //And I enter an email
            staffPage.getEmailInput().type(faker.internet.email());
            cy.wait(1000);
            staffPage.getRoleSelect().select('6457302b5ab6ff0001fba497');
            //And I save the invitation
            cy.wait(1000);
            cy.screenshot(`func3/esc4/e3`,{overwrite:true})
            staffPage.getSendInvitation().click();
            staffPage.getAlertMessage().should("exist");
            cy.screenshot(`func3/esc4/e4`,{overwrite:true})
        })

})