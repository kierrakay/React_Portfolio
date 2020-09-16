
export const addBlog = (data) => {
 
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/blog_posts', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(blogPost => dispatch({type: 'ADD_BLOG', payload: blogPost})) 
    }

}