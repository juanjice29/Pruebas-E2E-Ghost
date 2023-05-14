class StaffPage{
    getInvitePeople(){
        return cy.get("button.gh-btn.gh-btn-green");
    }
    getInviteForm(){
        return cy.get(`input[name="email"],input[name="role"]`);
    }
    getEmailInput(){
        return cy.get(`input[name="email"]`);
    }
    getRoleSelect(){
        return cy.get("#new-user-role");
    }
    getSendInvitation(){
        return cy.get(".gh-btn.gh-btn-green.gh-btn-icon.ember-view");
    }
    getAlertMessage(){
        return cy.get(".gh-alert.gh-alert-red.ember-view .gh-alert-content");
    }
    getAlertInvalidUser(){
        return cy.get(".gh-alert-content");
    }
    getAlertMessageAlready(){
        return cy.get(".gh-alert.gh-alert-red.ember-view .gh-alert-content,p.response");
    }
    

}
export default StaffPage