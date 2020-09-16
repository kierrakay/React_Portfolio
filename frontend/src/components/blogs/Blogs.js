import React from 'react'
import {Link } from 'react-router-dom'
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText} from 'react-mdl'
import { connect } from 'react-redux'
import { deleteBlog } from '../../actions/deleteBlog'


const Blogs = (props) => {
    
    const handleDelete = (blogPost) => {
    //   debugger
      props.deleteBlog(blogPost.id)
    }
        return (
    
            <div className="blogs-grid" >
                    {props.blogPosts.map(blogPost =>
                <Grid key={blogPost.id}>
                <Cell col={12}>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                    <CardTitle style={{color: 'black', height: '176px', background: '#'}}>  {blogPost.title} </CardTitle>
                        <CardText>
                            {blogPost.content}
        
                        </CardText>
                    <CardActions border>
                        {/* <Button component={ Link } to={`/blogs/${blogPost.id}`} colored ripple>
                            Comment Here
                        </Button> */}
                        <Link to={`/blogs/${blogPost.id}`}>Comment Here</Link>
                        <Button> 
                            <a href={blogPost.url}>Medium</a>
                        </Button>
                        <Button onClick={()=> handleDelete(blogPost)}>
                            X
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

    export default connect(null, {deleteBlog})(Blogs)
    // export default Blogs

    

















