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
        return cy.get("div.gh-publishmenu-radio");
    }
    getSchedule2(){
        return cy.get("div.gh-date-time-picker-date");
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
    getCloseV4(){
        return cy.get("button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon")
    }
    getPublishV4(){
        return cy.get("div.gh-publishmenu.ember-view")
    }
    getSaveV4(){
        return cy.get("button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view")
    }
    getSettingsV4(){
        return cy.get("button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon")
    }
    getCloseAuthor(){
        return cy.get("li.ember-power-select-option.ember-power-select-option--search-message")
    }
}
export default NewPagePage