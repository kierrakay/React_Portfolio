// export const addBlog = (formData) => {

//         return (dispatch) => {
//             fetch('http://localhost:3000/api/v1/blog_posts', {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//                 },
//                 method: 'POST',
//                 body: formData
            
//             })
//             .then(res => res.json())
//             .then(blogPost => dispatch({type: 'ADD_BLOG', payload: blogPost})) 
//         }
    
//     }


// export const addBlog = (formData) => {
//     debugger
//     return (dispatch) => {
//     fetch('http://localhost:3000/api/v1/blog_posts', {
//     method: 'POST',
//     body: formData
//   })
//   .then(res => res.json())
//   .then(blogPost => dispatch({type: 'ADD_BLOG', payload: blogPost})) 

// }
// }






export const addBlog = (data) => {
debugger
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
        // debugger
    }

}