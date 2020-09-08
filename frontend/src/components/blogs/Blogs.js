import React from 'react'
import Blog from './Blog'
// import { Link } from 'react-router-dom'


const Blogs = (props) => {
console.log(props)
    return (
        <div>
            {props.blogPosts.map( (blogPost,id) =>
                <Blog key={id}blogPost={blogPost}/>
            )}
        </div>
    )

}

export default Blogs


//  <div key={blogPost.id}><Blog blogPost={blogPost}/></div> 