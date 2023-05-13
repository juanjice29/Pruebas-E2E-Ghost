class PostPage{
    getNewPostButton(){
        return cy.get("a.ember-view.gh-btn.gh-btn-green")
    }
    getPostBySlug(value){
        return cy.get(`a[href='#/editor/post/${value}/']`)
    }
}
export default PostPage