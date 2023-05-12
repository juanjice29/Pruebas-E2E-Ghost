let queryAddress="#ember8"
let queryPassword="#ember10"
class SingInPage{
    

    getEmailAddress(){
        return cy.get(query_address)
    }
    getPassWord(){
        return cy.get(queryPassword)
    }    
    setEmailAddress(value){
        return cy.get(queryAddress).type(value);
    }

    setPassWord(value){
        return cy.get(queryPassword).type(value);
    }
    

}

export default SingInPage