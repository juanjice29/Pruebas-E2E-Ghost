import {globalVariables} from "../../environment/credentials"
import { faker } from '@faker-js/faker';
//Escenario 4 --Contraseña incorrecta --Escenario Psudo aleatorio Aleatorio
const data = require("../data/a_priori_data.json");

describe('F1-AP-1-7', 
  () => {   
    let escenariosLogin=data[0].login
    for(let i in escenariosLogin){
        it(`Hacer Login ${i}`,()=>{
          
            cy.hacerLoginCompleto(escenariosLogin[i].email,escenariosLogin[i].password,"signin","p.main-error");
          
          
        })
      }
    }
  
)