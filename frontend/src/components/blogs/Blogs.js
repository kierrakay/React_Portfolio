import React from 'react'
// import Blog from './Blog'
import {Link } from 'react-router-dom'
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText} from 'react-mdl'




const Blogs = (props) => {
   
    
        return (
    
            <div className="blogs-grid" >
                {props.blogPosts.map(blogPost =>
            <Grid key={blogPost.id}>
            <Cell col={12}>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
            <CardTitle style={{color: 'black', height: '176px', background: '#'}}>  {blogPost.title}</CardTitle>
                    <CardText>
                        {blogPost.content}
    
                    </CardText>
                    <CardActions border>
                    <Button colored >
                        <Link to={`/blogs/${blogPost.id}`}>Comment Here</Link>
                        </Button>
                        <Button >
                        <a href={blogPost.url}>Meduim</a>
                        </Button>
                        {/* <Button colored ripple>
                        <Link to={blogPost.url}>Medium</Link>  
                        </Button> */}
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
        
                    </CardMenu>
          </Card>
          </Cell>
          </Grid>)}
    
    
            </div>
         
        )
    }

    export default Blogs

























//part 1
// const Blogs = (props) => {
//     console.log(props)
//         return (
//             <div>
//                 {props.blogPosts.map( (blogPost,id) =>
//                     <Blog key={id}blogPost={blogPost}/>
//                 )}
//             </div>
         
//         )
    
//     }
    
//     export default Blogs


//part 2
// const Blogs = (props) => {
// console.log(props)
//     return (
//         <div>
//         {props.blogPosts.map(blogPost =>
//             <li key={blogPost.id}>
//                 <Link to={`/blogs/${blogPost.id}`}>{blogPost.title}</Link>
//         </li> )}
//         </div>
//     )

// }

// export default Blogs































