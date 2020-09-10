import React from 'react'
// import Blog from './Blog'
import {Link } from 'react-router-dom'
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText} from 'react-mdl'




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





const Blogs = (props) => {
   
    
        return (
    
            <div className="projects-grid" >
                {props.blogPosts.map(blogPost =>
            <Grid key={blogPost.id}>
            <Cell col={12}>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
            <CardTitle style={{color: 'black', height: '176px', background: '#'}}>  {blogPost.title}</CardTitle>
               {/* <CardTitle style={{color: 'black', height: '176px', background: '#'}}>{props.blogPost.title}</CardTitle> */}
                    <CardText>
                        {blogPost.content}
    
                    </CardText>
                    <CardActions border>
                    <Button colored>
                        <Link to={`/blogs/${blogPost.id}`}>see blog</Link>
                        </Button>
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
































