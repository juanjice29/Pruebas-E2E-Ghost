class NewPagePage{
    
    getInputTitle(){
        return cy.get("textarea.gh-editor-title.ember-text-area.gh-input.ember-view");
    }
    getInputPublish(){
        return cy.get("button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view");
    }
    getInputDescription(){
        return cy.get("article.koenig-editor.w-100.flex-grow.relative.center.mb0.mt0.ember-view");
    }
    getSaveButton(){
        return cy.get("div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger");
    }
    getSchedule(){
        return cy.get("div.gh-publishmenu-radio-button::before");
    }
    getSettings(){
        return cy.get("button.post-settings");
    }
    getTags(){
        return cy.get("#tag-input");
    }
    getTag(){
        return cy.get("li.ember-power-select-option");
    }
    getClose(){
        return cy.get("button.close.settings-menu-header-action");
    }
    getExcerpt(){
        return cy.get("#custom-excerpt");
    }
    getAuthors(){
        return cy.get("#author-list");
    }
    getAuthor(){
        return cy.get("li.ember-power-select-option");
    }
}
export default NewPagePage