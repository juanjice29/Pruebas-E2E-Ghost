
//Funcionalidad hacer Login
import {globalVariables} from "../../environment/credentials"
import { faker } from '@faker-js/faker';
//Escenario 1

describe('F1E1', 
  () => {
    it('Hacer Login',()=>{
      cy.hacerLogin(globalVariables.password,"site","nav.gh-nav.ember-view","esc1");
    })}
  
)
//Escenario 2 --Contraseña incorrecdta --Escenario Aleatorio
describe('F1E2', 
  () => {
   
    it('Hacer Login',()=>{
      cy.hacerLogin(faker.internet.password(),"signin","p.main-error","esc2");
    })}
  
)
//Escenario 3
describe('F1E3', 
  () => {   
    
      it('Hacer Login',()=>{
        cy.hacerLogin("' or 1=1","signin","p.main-error","esc3");
      })}
)



