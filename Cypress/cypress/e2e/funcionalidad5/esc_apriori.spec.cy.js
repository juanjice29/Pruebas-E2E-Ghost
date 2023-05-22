const data = require("../datosf4/a_priori_data.json");

//Escenario 1: Crear post con título y descripción vacía.
//Escenario 2: Crear post con título de una letra y descripción con caracteres especiales
//Escenario 3: Crear post con título de caracteres especiales y descripción de una palabra
//Escenario 4: Crear post con título de un párrafo (más de 255 caracteres) y descripción de una letra.
//Escenario 5: Crear post con título de varias palabras y descripción igual.
//Escenario 6: Crear post con título de caracteres especiales y descripción de una letra.
//Escenario 7: Crear post con título de caracteres especiales y descripción también.
//Escenario 8: Crear post con título de varias palabras y descripción vacía.
//Escenario 9: Crear post con título de una letra y descripción de varias palabras.
//Escenario 10: Crear post con título de email y descripción de varias palabras.

describe('Funcionalidad 5 - Escenarios del 1 al 10', 
  () => {   
    let escenariosPosts=data[0].post;
    for(let i in escenariosPosts){
        it(`Crear página ${i}`,()=>{
            cy.crearPost(escenariosPosts[i].title, escenariosPosts[i].description);
        })
      }
    }
)