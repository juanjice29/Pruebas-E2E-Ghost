const data = require("../datosf4/a_priori_data.json");

//Escenario 1: Crear una página con título y descripción vacía.
//Escenario 2: Crear página con título de una letra y descripción con caracteres especiales
//Escenario 3: Crear página con título de caracteres especiales y descripción de una palabra
//Escenario 4: Crear página con título de un párrafo (más de 255 caracteres) y descripción de una letra.
//Escenario 5: Crear página con título de varias palabras y descripción igual.
//Escenario 6: Crear página con título de caracteres especiales y descripción de una letra.
//Escenario 7: Crear página con título de caracteres especiales y descripción también.
//Escenario 8: Crear página con título de varias palabras y descripción vacía.
//Escenario 9: Crear página con título de una letra y descripción de varias palabras.
//Escenario 10: Crear página con título de email y descripción de varias palabras.

describe('Funcionalidad 4 - Escenarios del 1 al 10', 
  () => {   
    let escenariosPages=data[0].page;
    for(let i in escenariosPages){
        it(`Crear página ${i}`,()=>{
            cy.crearPage(escenariosPages[i].title, escenariosPages[i].description);
        })
      }
    }
)
