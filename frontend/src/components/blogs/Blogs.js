import React from 'react'
import Blog from './Blog'
import { Link } from 'react-router-dom'

const Blogs = (props) => {

    return (
        <div>
            {props.blogPosts.map(blogPost =>
                <li key={blogPost.id}>
                    <Link to={`/blogs/${blogPost.id}`}>{blogPost.title}</Link>
                </li>
            )}
        </div>
    )

}

export default Blogs


//  <div key={blogPost.id}><Blog blogPost={blogPost}/></div> 