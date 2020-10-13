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

export const addBlog = data => {
  const formData = new FormData()
  formData.append('blog_post[title]', data.title)
  formData.append('blog_post[content]', data.content)
  formData.append('blog_post[link]', data.link)
  formData.append('blog_post[image]', data.image)

  return dispatch => {
    fetch('http://localhost:5000/api/v1/blog_posts', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(blogPost => dispatch({ type: 'ADD_BLOG', payload: blogPost }))
  }
}

// handleSubmit = event => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('title', this.state.title);
//     formData.append('content', this.state.content);
//     formData.append('link', this.state.link);
//     formData.append('image', this.state.image);
//     // this.props.addBlog(formData)
//     console.log(formData)
//     fetch('http://localhost:3000/api/v1/blog_posts', {
//         headers: { 'content-type': 'multipart/form-data' },
//       method: 'POST',
//       body: formData
//     })
//     .catch(error=>console.log(error));
