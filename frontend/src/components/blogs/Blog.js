import React from 'react'

const Blog = (props) => {

    let blogPost = props.blogPosts[props.match.params.id - 1 ]
    return (
        <div>
            <li> 
                {blogPost ? blogPost.title : null } - {blogPost ? blogPost.content: null } 
            </li>
        </div>
    )
}

export default Blog
