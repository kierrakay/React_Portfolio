export const deleteBlog = (blogPostId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/blog_posts/${blogPostId}`, {
        method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(blog => dispatch({type: 'DELETE_BLOG', payload: blog}))
    }

}