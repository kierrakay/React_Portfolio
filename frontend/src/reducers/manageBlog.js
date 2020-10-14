

export default function blogReducer(state = {
    blogPosts: []},
    action) {
        // debugger
        switch (action.type){
            case 'FETCH_BLOGS':
                return {blogPosts: action.payload}
                //this is our new state..it replaces with empty with payload
            case 'ADD_BLOG':
            //     debugger
                return {...state, blogPosts: [...state.blogPosts, action.payload]}
            case 'ADD_COMMENT':
                let blogPosts = state.blogPosts.map(blogPost => {
                    if(blogPost.id === action.payload.id) {
                        return action.payload
                    } else {
                        return blogPost
                    }
                })
                return {...state, blogPosts: blogPosts}
         
            case 'DELETE_BLOG':
                let blogPostsDelete = state.blogPosts.map(blogPost => {
                    if(blogPost.id === action.payload.id) {
                        return action.payload
                    } else {
                        return blogPost
                    }
                })
                return {...state, blogPosts: blogPostsDelete}
            default: 
            return state 

        }
        
 
  }










// export default function blogReducer(state = {
//     blogPosts: [] },
//     action) {

//         return action.payload
 
//   }
//works for checking
