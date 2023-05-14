class NewPostPage{
    
    getTitleName(){
        return cy.get("textarea.gh-editor-title.ember-text-area.gh-input.ember-view");
    }
    getPublish(){
        return cy.get("div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger");
    }
    getInputDescription(){
        return cy.get("div.koenig-editor__editor.__mobiledoc-editor.__has-no-content");
    }
    getSaveButton(){
        return cy.get("button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view");
    }
    getSettings(){
        return cy.get("button.post-settings");
    }
    getTags(){
        return cy.get("input.ember-power-select-trigger-multiple-input");
    }
    getTag(){
        return cy.get("li.ember-power-select-option");
    }
    getClose(){
        return cy.get("button.close.settings-menu-header-action");
    }
}
export default NewPostPage