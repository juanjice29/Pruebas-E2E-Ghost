
import {globalVariables} from "../../environment/credentials"
import { faker } from '@faker-js/faker';
//Escenario 1 

describe('F1-A-1', 
  () => {
    let espacios_pass=getRandomInt(2,10);
    let espacios_email=getRandomInt(2,15);  
    it('Hacer Login',()=>{
      cy.hacerLoginCompleto(" ".repeat(espacios_email)," ".repeat(espacios_pass),"signin","p.main-error");
    })}
  
)

describe('F1-A-2', 
  () => {
    let email=faker.internet.email();
    let password=faker.internet.password().substring(0,1);  
    it('Hacer Login',()=>{
      cy.hacerLoginCompleto(email,password,"signin","p.main-error");
    })}
  
)

describe('F1-A-3', 
  () => {
    let email=faker.internet.email().substring(0,1);    
    it('Hacer Login',()=>{
      cy.hacerLoginCompleto(email,globalVariables.password,"signin","p.main-error");
    })}
  
)

describe('F1-A-4', 
  () => {
    let email=faker.internet.email().split("@")[0];    
    it('Hacer Login',()=>{
      cy.hacerLoginCompleto(email,globalVariables.password,"signin","p.main-error");
    })}
  
)

describe('F1-A-5', 
  () => {
    let email=faker.internet.emoji().repeat(getRandomInt(5,10));
    let password=faker.internet.emoji().repeat(getRandomInt(5,15));  
    it('Hacer Login',()=>{
      cy.hacerLoginCompleto(email,password,"signin","p.main-error");
    })}
  
)


describe('F1-A-6', 
  () => {
    let email=faker.lorem.lines(getRandomInt(2,6));    
    it('Hacer Login',()=>{
      cy.hacerLoginCompleto(email,globalVariables.password,"signin","p.main-error");
    })}
  
)

describe('F1-A-7', 
  () => {
    let password=faker.lorem.lines(getRandomInt(2,6));    
    it('Hacer Login',()=>{
      cy.hacerLoginCompleto(globalVariables.email,password,"signin","p.main-error");
    })}
  
)
function getRandomInt(min,max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}