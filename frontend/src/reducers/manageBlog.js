export default function manageBlog(state = {
    blogs: [],
  }, action) {
      console.log('action', action)
    switch (action.type) {
      case 'ADD_BLOG':
  
        return { blogs: state.blogs.concat(action.payload) };
  
      default:
        return state;
    }
  }