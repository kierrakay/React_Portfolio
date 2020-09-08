import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import BlogInput from '../components/blogs/BlogInput'
import { fetchBlogPosts} from '../actions/fetchBlogs'
// import { addBlog } from '../actions/addBlog'
import Blogs from '../components/blogs/Blogs'
import Blog from '../components/blogs/Blog'


class BlogsContainer extends React.Component {

    componentDidMount() {
      this.props.fetchBlogPosts()

    }


    render() {
        
        return (
            <div>
                <Route path='/blogs/new' component={BlogInput} />
                <Route  path='/blogs/:id' render ={(routerProps)=><Blog {...routerProps} blogPosts={this.props.blogPosts} />} />
                <Route exact path='/blogs' render={(routerProps)=><Blogs {...routerProps} blogPosts={this.props.blogPosts} />} />
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


