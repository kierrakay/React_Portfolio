export function fetchBlogPosts() {
    return (dispatch) => {
    // console.log('inside fetch blogs')
       fetch('http://localhost:3000/api/v1/blog_posts')
          .then(resp => resp.json())
          .then(blogs => dispatch ({
              type: 'FETCH_BLOGS',
              payload: blogs
          }))
          
    }
}
//why is this payload blogs and not blogposts? where is this connecting?