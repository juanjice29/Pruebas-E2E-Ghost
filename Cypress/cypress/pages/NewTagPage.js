class NewTagPage{
    
    getInputName(){
        return cy.get("#tag-name");
    }
    getInputSlug(){
        return cy.get("#tag-slug");
    }
    getInputDescription(){
        return cy.get("#tag-description");
    }
    getSaveButton(){
        return cy.get("section .view-actions > button");
    }
    
}
export default NewTagPage