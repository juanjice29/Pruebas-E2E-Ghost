import {globalVariables} from "../../environment/credentials"
import { faker } from '@faker-js/faker';
//Escenario 4 --Contraseña incorrecta --Escenario Psudo aleatorio Aleatorio
import StaffPage from "../../pages/StaffPage";
import NavBarPage from "../../pages/NavBarPage";

describe('F3-A-E1', 
  () => {
    it('Enviar Email',()=>{
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view");
        const navPage= new NavBarPage();
        const staffPage= new StaffPage();
        
        navPage.getStaffFunction().click();              
        cy.wait(1000);
        staffPage.getInvitePeople().click();        
        cy.wait(1000);
        staffPage.getEmailInput().type(" ".repeat(getRandomInt(3,10)));
        cy.wait(1000);
        staffPage.getSendInvitation().click();
        cy.wait(1000);
        staffPage.getAlertMessageAlready().should("exist");
        
    })}
  
)
//Enviar email a staff con una cadena muy grande
describe('F3-A-E2', 
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
        staffPage.getEmailInput().type(faker.lorem.lines(5));
        cy.wait(1000);
        staffPage.getSendInvitation().click();
        cy.wait(1000);
        staffPage.getAlertMessageAlready().should("exist");
        
    })}
  
)
function getRandomInt(min,max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}