import {globalVariables} from "../../environment/credentials";
import { faker } from '@faker-js/faker';
import NavBarPage from '../../pages/NavBarPage';
import TagPage from '../../pages/TagPage';
import NewTagPage from '../../pages/NewTagPAge';
import StaffPage from "../../pages/StaffPage";

const data = require("../data/data_mockaroo.json");
//Enviar email a staff vacio
describe('F3-AP-E1', 
  () => {
    it('Enviar Email',()=>{
        cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view");
        const navPage= new NavBarPage();
        const staffPage= new StaffPage();

        navPage.getStaffFunction().click();              
        cy.wait(1000);
        staffPage.getInvitePeople().click();        
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
       
        let lorem=data[faker.datatype.number(1000)].lorem.substring(0,200); 
        navPage.getStaffFunction().click();              
        cy.wait(1000);
        staffPage.getInvitePeople().click();
        cy.wait(1000);
        staffPage.getEmailInput().type(lorem);
        cy.wait(1000);
        staffPage.getSendInvitation().click();
        cy.wait(1000);
        staffPage.getAlertMessageAlready().should("exist");
        
    })}
  
)