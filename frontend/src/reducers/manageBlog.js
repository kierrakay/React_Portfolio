

export default function blogReducer(state = {
    blogPosts: [] },
    action) {
        switch (action.type){
            case 'FETCH_BLOGS':
            return {blogPosts: action.payload}
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
