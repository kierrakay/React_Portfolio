
export const addBlog = (formData) => {
    debugger
  return dispatch => {
    const configurationObject = {
    //   credentials: "*",
      method: "POST",
      body: formData
    }

    return fetch('http://localhost:3000/api/v1/blog_posts', configurationObject)
      .then(r => r.json())
      .then(photo => {
        if (photo.error) {
          alert(photo.error)
        } else {
          // this is where I will dispatch an action creator function to update my store
          console.log("success", photo)
        }
      })
      .catch(error => console.log(error))
  }
}








//works withoutimage
// export const addBlog = (data) => {
// // debugger
//     return (dispatch) => {
//         fetch('http://localhost:3000/api/v1/blog_posts', {
//             headers: {
               
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json' 
//             },
//             method: 'POST',
//             body: JSON.stringify(data)
        
//         })
//         .then(res => res.json())
//         .then(blogPost => dispatch({type: 'ADD_BLOG', payload: blogPost})) 
//         // debugger
//     }

// }



//kinda working for aws
// export const addBlog = formData => {
//     const config = {
//       method: "POST",
//       headers: {
  
//         "Accept": "application/json"
//       },
//       body: formData
//     }
//     return (dispatch) => {
//     return fetch('http://localhost:3000/api/v1/blog_posts', config)
//       .then(res => res.json())
//      .then(blogPost => dispatch({type: 'ADD_BLOG', payload: blogPost})) 
//   }

// }
































//kinda works
// export const addBlog = data => {
//     // debugger
//     const formData = new FormData()
//     formData.append('blog_post[title]', data.title)
//     formData.append('blog_post[content]', data.content)
//     formData.append('blog_post[link]', data.link)
//     formData.append('blog_post[image]', data.image)
  
//     return dispatch => {
//       fetch('http://localhost:3000/api/v1/blog_posts', {
//         method: 'POST',
//         body: formData
//       })
//         .then(res => res.json())
//         .then(blogPost => dispatch({ type: 'ADD_BLOG', payload: blogPost }))
//     }
//   }


  