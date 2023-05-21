import {globalVariables} from "../../environment/credentials";
import { faker } from '@faker-js/faker';

const data = require("../data/data_mockaroo.json");
//Crear Tag sin ningun dato
describe('F2-AP-E1', 
  () => {
    it('Crear Tag',()=>{
        cy.crearTagVacio();
    })}  
)

//Crear Tag con un nombre de un caracter

describe('F2-AP-E2', 
  () => {    
    let word=data[faker.datatype.number(1000)].word;  
    let oneCharWord=word.substring(0,1);
    let color=data[faker.datatype.number(1000)].color.slice(1);
    it('Crear Tag',()=>{
        cy.crearTag(oneCharWord,"zero tolerance","zero tolerance",color);
    })}  
)

//Crear Tag con un nombre de caracteres extraños

describe('F2-AP-E3', 
  () => {    
    let nombre=data[faker.datatype.number(1000)].naugthy_string; 
    let color=data[faker.datatype.number(1000)].color.slice(1);
    let description=data[faker.datatype.number(1000)].word; 
    let slug=data[faker.datatype.number(1000)].word; 
    it('Crear Tag',()=>{
        cy.crearTag(nombre,slug,description,color);
    })}  
)

//Crear Tag con un slug de caracteres extraños
describe('F2-AP-E4', 
  () => {    
    let nombre=data[faker.datatype.number(1000)].word; 
    let color=data[faker.datatype.number(1000)].color.slice(1);
    let description=data[faker.datatype.number(1000)].word; 
    let slug=data[faker.datatype.number(1000)].naugthy_string; 
    it('Crear Tag',()=>{
        cy.crearTag(nombre,slug,description,color);
    })}  
)

//Crear un Tag con una descripcion muy grande
describe('F2-AP-E5', 
  () => {    
    let nombre=data[faker.datatype.number(1000)].word; 
    let color=data[faker.datatype.number(1000)].color.slice(1);
    let description=data[faker.datatype.number(1000)].lorem; 
    let slug=data[faker.datatype.number(1000)].word; 
    it('Crear Tag',()=>{
        cy.crearTag(nombre,slug,description,color);
    })}
) 

//Crear un Tag con un nombre muy grande
describe('F2-AP-E6', 
  () => {    
    let nombre=data[faker.datatype.number(1000)].lorem.substring(0,200); 
    let color=data[faker.datatype.number(1000)].color.slice(1);
    let description=data[faker.datatype.number(1000)].word; 
    let slug=data[faker.datatype.number(1000)].word; 
    it('Crear Tag',()=>{
        cy.crearTag(nombre,slug,description,color);
    })}
) 

//Crear un Tag con un slug muy grande
describe('F2-AP-E7', 
  () => {    
    let nombre=data[faker.datatype.number(1000)].word; 
    let color=data[faker.datatype.number(1000)].color.slice(1);
    let description=data[faker.datatype.number(1000)].word; 
    let slug=data[faker.datatype.number(1000)].lorem.substring(0,200); 
    it('Crear Tag',()=>{
        cy.crearTag(nombre,slug,description,color);
    })}
) 

//Crear un tag con una descripcion que contenga muchos caracteres extraños
describe('F2-AP-E8', 
  () => {    
    let nombre=data[faker.datatype.number(1000)].word; 
    let color=data[faker.datatype.number(1000)].color.slice(1);
    let slug=data[faker.datatype.number(1000)].word; 
    let description; 
    for(let i=0;i<15;i++){
        description=description+data[faker.datatype.number(1000)].naugthy_string; 
    }
    it('Crear Tag',()=>{
        cy.crearTag(nombre,slug,description,color);
    })}
) 
//Crear un Tag un link en el campo slug
describe('F2-AP-E9', 
  () => {    
    let nombre=data[faker.datatype.number(1000)].word; 
    let color=data[faker.datatype.number(1000)].color.slice(1);
    let slug=data[faker.datatype.number(1000)].url; 
    let description=data[faker.datatype.number(1000)].word;
    
    it('Crear Tag',()=>{
        cy.crearTag(nombre,slug,description,color);
    })}
) 

//Crear un Tag con un link en el campo nombre

describe('F2-AP-E10', 
  () => {    
    let nombre=data[faker.datatype.number(1000)].url;
    let color=data[faker.datatype.number(1000)].color.slice(1);
    let slug= data[faker.datatype.number(1000)].word; 
    let description=data[faker.datatype.number(1000)].word;
    
    it('Crear Tag',()=>{
        cy.crearTag(nombre,slug,description,color);
    })}
) 

//Crear un Tag con un color invalido

describe('F2-AP-E11', 
  () => {    
    let nombre=data[faker.datatype.number(1000)].word;
    let color=data[faker.datatype.number(1000)].word;
    let slug= data[faker.datatype.number(1000)].word; 
    let description=data[faker.datatype.number(1000)].word;
    
    it('Crear Tag',()=>{
        cy.crearTag(nombre,slug,description,color);
    })}
)

