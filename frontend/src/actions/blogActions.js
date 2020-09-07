export function fetchBlogPosts() {
    return (dispatch) => {
    console.log('inside fetch blogs')
       fetch('http://localhost:3000/api/v1/blog_posts')
          .then(resp => resp.json())
          .then(blogs => dispatch ({
              type: 'FETCH_BLOGS',
              payload: blogs

          }))

    }
}



// export function fetchBlogPosts(action) {
//     return action
// }
//works for checking



    // fetch('http://localhost:3000/api/v1/blog_posts')
    //       .then(resp => resp.json())
    //       .then(data => console.log(data))

// }