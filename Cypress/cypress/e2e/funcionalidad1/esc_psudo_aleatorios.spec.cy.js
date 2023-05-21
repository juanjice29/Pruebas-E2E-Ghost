import {globalVariables} from "../../environment/credentials";
import { faker } from '@faker-js/faker';

const data = require("../data/data_mockaroo.json");

//Hacer login sin usuario ni contraseña
describe('F1-D-E1', 
  () => {
    it('Hacer Login',()=>{
        cy.visit(globalVariables.baseUrl);       
        //And I wait for 2 seconds
        cy.get("#ember12").click();
        //And I wait for 2 seconds
        cy.wait(2000);        
        //Then url should end in #/site
        cy.url().should('equal',globalVariables.baseUrl+"#/signin")
        //Then navbar should exist
        cy.get("p.main-error").should("exist")        
        cy.wait(2000);
    })}
  
)
//Hacer login con contraseña de una sola letra
describe('F1-D-E2', 
  () => {
    let selector=faker.datatype.number(1000)
    let password=data[selector].password.substring(0,1);    
    it('Hacer Login',()=>{
      cy.hacerLogin(password,"signin","p.main-error");
    })}
  
)
//Hacer login con email de una sola letra
describe('F1-D-E3', 
  () => {
    let selector=faker.datatype.number(1000)
    let email=data[selector].email.substring(0,1);     
    it('Hacer Login',()=>{
      cy.hacerLoginCompleto(email,globalVariables.password,"signin","p.main-error");
    })}
  
)

//Hacer login con correo incompleto y contraseña correcta
describe('F1-D-E4', 
  () => {
    let selector=faker.datatype.number(1000)
    let email=data[selector].email.split("@")[0];     
    it('Hacer Login',()=>{
      cy.hacerLoginCompleto(email,globalVariables.password,"signin","p.main-error");
    })}
  
)
//Hacer login con caracteres especiales en la contraseña y email
describe('F1-D-E5', 
  () => {    
    let email=data[faker.datatype.number(1000)].naugthy_string;
    let password=data[faker.datatype.number(1000)].naugthy_string;        
    it('Hacer Login',()=>{
      cy.hacerLoginCompleto(email,password,"signin","p.main-error");
    })}
  
)
//Hacer login con correo muy grande
describe('F1-D-E6', 
  () => {    
    let email=data[faker.datatype.number(1000)].lorem;    
      
    it('Hacer Login',()=>{
      cy.hacerLoginCompleto(email,globalVariables.password,"signin","p.main-error");
    })}
  
)
//Hacer login con contraseña muy grande
describe('F1-D-E7', 
  () => {
    let password=data[faker.datatype.number(1000)].lorem;    
    it('Hacer Login',()=>{
      cy.hacerLoginCompleto(globalVariables.email,password,"signin","p.main-error");
    })}
  
)