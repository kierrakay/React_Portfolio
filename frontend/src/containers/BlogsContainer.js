import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import BlogInput from '../components/blogs/BlogInput'
import { fetchBlogPosts } from '../actions/fetchBlogs'
import Blog from '../components/blogs/Blog'
import Blogs from '../components/blogs/Blogs'






class BlogsContainer extends React.Component {

    componentDidMount() {
   this.props.fetchBlogPosts()
    }

    render() {   
   
        return (   
            <div className="blogs">

                <Switch>
                 <Route  path='/blogs/new' component={BlogInput} />
                 <Route   path='/blogs/:id' render={(routerProps) => <Blog {...routerProps} blogPosts={this.props.blogPosts} />} />
                 <Route  path='/:blogs' render={(routerProps) => <Blogs {...routerProps} blogPosts={this.props.blogPosts} />} /> 
                 </Switch>   
                </div>

        )
    }
}

//mstp renders after mdtp
    const mapStateToProps = state => {   
        return {
            blogPosts: state.blogPosts,
        }
    
    }

    export default connect(mapStateToProps, {fetchBlogPosts})(BlogsContainer)



