import React from 'react'
import { connect } from 'react-redux'
import BlogInput from '../components/blogs/BlogInput'
import Blog from '../components/blogs/Blog'

class BlogsContainer extends React.Component {

    renderBlogs = () => this.props.blogs.map((blog,id) => <Blog key={id} title={blog.title} content={blog.content}/>)

    render() {
        return (
            <div>
                <BlogInput />
                {this.renderBlogs()}
                {/* <Blogs /> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        blogs: state.blogs
    }
}
export default connect(mapStateToProps)(BlogsContainer)