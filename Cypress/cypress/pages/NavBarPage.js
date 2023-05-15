class NavBarPage{

    getPostFunction(){
        return cy.get("a[href='#/posts/']")
    }
    getPageFunction(){

        return cy.get("a[href='#/pages/']")
    }
    getTagFunction(){
        return cy.get("li a[href='#/tags/']")
    }
    getStaffFunction(){
        return cy.get("li a[href='#/staff/']")

    }
}

export default NavBarPage