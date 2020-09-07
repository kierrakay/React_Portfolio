import React from 'react'
import { connect } from 'react-redux'
import BlogInput from '../components/blogs/BlogInput'
import { fetchBlogPosts} from '../actions/fetchBlogs'
// import { addBlog } from '../actions/addBlog'
import Blogs from '../components/blogs/Blogs'


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
        // const {fetchBlogPosts, addBlog} = this.props
        return (
            <div>
                <BlogInput />
                                {/* <BlogInput fetchBlogPosts={fetchBlogPosts} addBlog={addBlog}/> */}
                                {/* ^^good for adding props from mapDispatchToProps below */}
                {/* {this.renderBlogs()} */}
                <Blogs blogPosts={this.props.blogPosts} />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        blogPosts: state.blogPosts
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchBlogPosts: () => dispatch(fetchBlogPosts()),
//         addBlog: () => dispatch(addBlog()),
//     }
// }


export default connect(mapStateToProps, {fetchBlogPosts})(BlogsContainer)

// export default connect(mapStateToProps, mapDispatchToProps)(BlogsContainer)
