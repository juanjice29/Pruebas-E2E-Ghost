
import {globalVariables} from "../../environment/credentials"
import { faker } from '@faker-js/faker';
//Escenario 1 --Contraseña incorrecta --Escenario Aleatorio
describe('F1-A-1', 
  () => {
   
    it('Hacer Login',()=>{
      cy.hacerLogin(faker.word.conjunction({length:{min:10,max:20}}),"signin","p.main-error","esc4");
    })}
  
)
//Escenario 2 -- Caso de frontera ( Limite Superior) --Escenario Aleatorio
describe('F1-A-2',()=>{
    it("Hacer Login",()=>{
      cy.hacerLogin(faker.lorem.paragraphs(),"signin","p.main-error","esc5");
    })
  })
  
  //Escenario 3 -- Caso de frontera (Caracteres raros,emojis) --Escenario Aleatorio
  describe('F1-A-3',()=>{
    it("Hacer Login",()=>{
      cy.hacerLogin(faker.internet.emoji(),"signin","p.main-error","esc6");
    })
  })
  