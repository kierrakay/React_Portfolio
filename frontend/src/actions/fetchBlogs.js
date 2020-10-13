export function fetchBlogPosts() {
    // export const fetchBlogPosts = () => {
    return (dispatch) => {
    // console.log('inside fetch blogs')
       fetch('http://localhost:3000/api/v1/blog_posts')
          .then(resp => resp.json())
          .then(blogs => dispatch({
              type: 'FETCH_BLOGS',
              payload: blogs
          }))
          .catch((error) =>  {
            console.log("fetchblogs", error);
          }
          )
    }
}

