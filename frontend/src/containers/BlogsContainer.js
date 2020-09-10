import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
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
                <Switch>
                <Route  path='/blogs/new' component={BlogInput} />
                <Route path='/blogs/:id' render ={(routerProps)=><Blog {...routerProps} blogPosts={this.props.blogPosts} />} />
                <Route  exact path='/blogs' render={(routerProps)=><Blogs {...routerProps} blogPosts={this.props.blogPosts} />} />
                </Switch>
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


//dont need exact with switch
//:id route is the same as new.its a placeholder so always use new before id because switch finds the first match and id and new are the same