export const addComment = (comment, blogPostId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/blog_posts/${blogPostId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(comment)
            //here we are sending data
        })
        .then(resp => resp.json())
        //converting data back to json
        .then(blogPost => dispatch({type: 'ADD_COMMENT', payload: blogPost}))
        .catch(error=> { console.log(error) });
        //once resp back into json its a comment. to get our new comment in redux store we use dispatch. which we can do cause we pass in
        // dispatch above . payload is the comment we are getting back.
    
    }
    }









