class TagPage{
    getNewTagButton(){
        return cy.get("a[href='#/tags/new']")
    }
    getTagBySlug(value){
        return cy.get(`a[href='#/tags/${value}/']`)
    }
}
export default TagPage