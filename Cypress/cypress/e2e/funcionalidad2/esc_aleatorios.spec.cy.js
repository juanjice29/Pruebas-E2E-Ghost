import {globalVariables} from "../../environment/credentials"
import { faker } from '@faker-js/faker';

describe('F2-A-E1', 
  () => {    
    let name=" ".repeat(getRandomInt(3,10));
    let color=" ".repeat(getRandomInt(3,10));
    let description=" ".repeat(getRandomInt(3,10));
    let slug=" ".repeat(getRandomInt(3,10));
    it('Crear Tag',()=>{
        cy.crearTag(name,slug,description,color);
    })}  
)

describe('F2-A-E2', 
  () => {    
    let name=faker.word.adjective().substring(0,1);
    let color=faker.color.rgb().slice(1);
    let description=faker.lorem.lines(1);
    let slug=faker.word.conjunction();
    it('Crear Tag',()=>{
        cy.crearTag(name,slug,description,color);
    })}  
)
describe('F2-A-E3', 
  () => {    
    let num=getRandomInt(5,25);
    let name;
    for(let i;i<=num;i++){
        name = name+faker.internet.emoji();
    }    
    let color=faker.color.rgb().slice(1);
    let description=faker.lorem.lines(1);
    let slug=faker.word.conjunction();
    it('Crear Tag',()=>{
        cy.crearTag(name,slug,description,color);
    })}  
)
describe('F2-A-E4', 
  () => {    
    let num=getRandomInt(5,25);
    let slug;
    for(let i;i<=num;i++){
        slug = slug+faker.internet.emoji();
    } 
    let name=faker.word.adjective();
    let color=faker.color.rgb().slice(1);
    let description=faker.lorem.lines(1);    
    it('Crear Tag',()=>{
        cy.crearTag(name,slug,description,color);
    })}  
)

describe('F2-A-E5', 
  () => {    
    let name=faker.word.adjective();
    let color=faker.color.rgb().slice(1);
    let description=faker.lorem.lines(getRandomInt(5,10));
    let slug=faker.word.conjunction();
    it('Crear Tag',()=>{
        cy.crearTag(name,slug,description,color);
    })}  
)

describe('F2-A-E6', 
  () => {    
    let name=faker.lorem.lines(getRandomInt(5,10));
    let color=faker.color.rgb().slice(1);
    let description=faker.lorem.lines(1);
    let slug=faker.word.conjunction();
    it('Crear Tag',()=>{
        cy.crearTag(name,slug,description,color);
    })}  
)

describe('F2-A-E7', 
  () => {    
    let name=faker.word.adjective();
    let color=faker.color.rgb().slice(1);
    let description=faker.lorem.lines(1);
    let slug=faker.lorem.lines(getRandomInt(5,10));
    it('Crear Tag',()=>{
        cy.crearTag(name,slug,description,color);
    })}  
)

describe('F2-A-E8', 
  () => {    
    let num=getRandomInt(500,510);
    let description;
    for(let i;i<=num;i++){
        description = description+faker.internet.emoji();
    } 
    let name=faker.word.adjective();
    let color=faker.color.rgb().slice(1);    
    let slug=faker.word.conjunction();
    it('Crear Tag',()=>{
        cy.crearTag(name,slug,description,color);
    })}  
)
describe('F2-A-E9', 
  () => {    
    let name=faker.word.adjective();
    let color=faker.color.rgb().slice(1);
    let description=faker.lorem.lines(1);
    let slug=faker.internet.url();
    it('Crear Tag',()=>{
        cy.crearTag(name,slug,description,color);
    })}  
)
describe('F2-A-E10', 
  () => {    
    let name=faker.internet.url() ;
    let color=faker.color.rgb().slice(1);
    let description=faker.lorem.lines(1);
    let slug=faker.word.conjunction();
    it('Crear Tag',()=>{
        cy.crearTag(name,slug,description,color);
    })}  
)
describe('F2-A-E11', 
  () => {    
    let name=faker.word.adjective();
    let color=faker.word.adjective();
    let description=faker.lorem.lines(1);
    let slug=faker.word.conjunction();
    it('Crear Tag',()=>{
        cy.crearTag(name,slug,description,color);
    })}  
)

function getRandomInt(min,max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}