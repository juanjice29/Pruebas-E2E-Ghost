import {globalVariables} from "../../environment/credentials"

//Escenario 1 -- Escenario
describe('F1E1-v4', 
  () => {
    it('Hacer Login',()=>{
      cy.hacerLoginV4(globalVariables.password,"dashboard","nav.gh-nav","esc1");
    })}
  
)
//Escenario 2

describe('F1E2-v4', 
  () => {
    it('Hacer Login',()=>{
      cy.hacerLoginV4("Worng password","signin","p.main-error","esc2");
    })}
  
)
//Escneario 3
describe('F1E3-v4', 
  () => {
    it('Hacer Login',()=>{
      cy.hacerLoginV4("' or 1=1","signin","p.main-error","esc3");
    })}
  
)
