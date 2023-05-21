import {globalVariables} from "../../environment/credentials"
import { faker } from '@faker-js/faker';
//Escenario 4 --Contraseña incorrecta --Escenario Psudo aleatorio Aleatorio
const data = require("../data/a_priori_data.json");
describe('F2-D-1-11', 
  () => {   
    let escenariosTag=data[0].tag
    for(let i in escenariosTag){
      it(`Crear Tag ${i}`,()=>{
        cy.crearTag(escenariosTag[i].nombre,escenariosTag[i].slug,escenariosTag[i].description,escenariosTag[i].color);
      })}
    }
    
    
  
)