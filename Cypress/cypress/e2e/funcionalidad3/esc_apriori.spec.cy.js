import {globalVariables} from "../../environment/credentials"
import { faker } from '@faker-js/faker';
//Escenario 4 --Contraseña incorrecta --Escenario Psudo aleatorio Aleatorio
describe('F1E7', 
  () => {   
    it('Hacer Login',()=>{
      cy.hacerLogin(faker.internet.password(),"signin","p.main-error","esc7");
    })}
  
)