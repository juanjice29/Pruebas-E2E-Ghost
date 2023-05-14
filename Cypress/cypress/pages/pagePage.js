class PagePage{
    getNewPageButton(){
        return cy.get("a[href='#/editor/page/']")
    }
    getPageBySlug(value){
        return cy.get(`a[href='#/editor/page/${value}/']`)
    }
}
export default PagePage