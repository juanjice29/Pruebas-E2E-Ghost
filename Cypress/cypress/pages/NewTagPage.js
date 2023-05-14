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
    typeEmptyName(){
        return cy.get("#tag-name").focus().clear({force:true});
    }
    getErrorModal(){
        return cy.get(".modal-footer .gh-btn.gh-btn-red");
    }
    
}
export default NewTagPage