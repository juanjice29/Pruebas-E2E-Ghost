import {globalVariables} from "../../environment/credentials"
import { faker } from '@faker-js/faker';
//Escenario 4 --Contraseña incorrecta --Escenario Psudo aleatorio Aleatorio
import StaffPage from "../../pages/StaffPage";
import NavBarPage from "../../pages/NavBarPage";
const data = require("../data/a_priori_data.json");
describe('F3-AP-E1', 
  () => {
    it('Enviar Email',()=>{
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view");
        const navPage= new NavBarPage();
        const staffPage= new StaffPage();
        let escenariosStaff=data[0].staff["E1"]
        navPage.getStaffFunction().click();              
        cy.wait(1000);
        staffPage.getInvitePeople().click();        
        cy.wait(1000);
        staffPage.getEmailInput().type(escenariosStaff.email);
        cy.wait(1000);
        staffPage.getSendInvitation().click();
        cy.wait(1000);
        staffPage.getAlertMessageAlready().should("exist");
        
    })}
  
)
//Enviar email a staff con una cadena muy grande
describe('F3-AP-E2', 
  () => {
    it('Enviar Email',()=>{
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view");
        const navPage= new NavBarPage();
        const staffPage= new StaffPage();
        let escenariosStaff=data[0].staff["E2"]
       
        navPage.getStaffFunction().click();              
        cy.wait(1000);
        staffPage.getInvitePeople().click();
        cy.wait(1000);
        staffPage.getEmailInput().type(escenariosStaff.email);
        cy.wait(1000);
        staffPage.getSendInvitation().click();
        cy.wait(1000);
        staffPage.getAlertMessageAlready().should("exist");
        
    })}
  
)