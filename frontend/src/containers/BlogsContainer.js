import React from 'react'
import { connect } from 'react-redux'
import BlogInput from '../components/blogs/BlogInput'
import { fetchBlogPosts} from '../actions/blogActions'
import Blogs from '../components/blogs/Blogs'
// import Blog from '../components/blogs/Blog'

class BlogsContainer extends React.Component {

    componentDidMount() {
      this.props.fetchBlogPosts()

    }

    // componentDidMount() {
    //     fetch('http://localhost:3000/api/v1/blog_posts')
    //       .then(resp => resp.json())
    //       .then(data => console.log(data))
    //     }
    //1

    // componentDidMount() {
    //  this.props.fetchBlogPosts({type: 'FETCH_BLOGS', payload: {title: 'checking title', content: 'checking content'}})
    //     }
    //2

 
    
    // renderBlogs = () => this.props.blogs.map((blog,id) => <Blog key={id} title={blog.title} content={blog.content}/>)

    render() {
        return (
            <div>
                <BlogInput />
                {/* <BlogInput blogPosts={this.props.blogPosts}/> */}
                {/* {this.renderBlogs()} */}
                <Blogs />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        blogPosts: state.blogPosts
    }
}



export default connect(mapStateToProps, {fetchBlogPosts})(BlogsContainer)
// export default connect(null, {fetchBlogPosts})(BlogsContainer) <-- works
// export default connect(null, mapDispatchToProps)(BlogsContainer)
