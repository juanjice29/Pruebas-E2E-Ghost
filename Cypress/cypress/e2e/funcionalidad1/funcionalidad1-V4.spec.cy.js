import {globalVariables} from "../../environment/credentials"
//Escenario 1
describe('Con mi usuario y contraseña de ghost quiero hacer login en la pagina', 
  () => {
    it('Hacer Login',()=>{
      cy.hacerLoginV4(globalVariables.password,"dashboard","nav.gh-nav","esc1");
    })}
  
)
//Escenario 2

describe('Con mi usuario y contraseña de ghost quiero hacer login en la pagina utilizando una contraseña incorrecta', 
  () => {
    it('Hacer Login',()=>{
      cy.hacerLoginV4("Worng password","signin","p.main-error","esc2");
    })}
  
)
//Escneario 3
describe('Con mi usuario y contraseña de ghost quiero hacer login en la pagina haciendo inyeccion de codigo', 
  () => {
    it('Hacer Login',()=>{
      cy.hacerLoginV4("' or 1=1","signin","p.main-error","esc3");
    })}
  
)