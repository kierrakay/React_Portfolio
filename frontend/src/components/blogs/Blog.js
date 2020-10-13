import React from 'react'
// import { connect } from 'react-redux'
// import {upvoteBlog} from '../../actions/upvoteBlog'
// import { Link } from 'react-router-dom'
// import { Grid, Cell, Card, CardTitle, CardActions, CardMenu, CardText} from 'react-mdl'
import CommentsContainer from '../../containers/CommentsContainer'


const Blog = (props) => {

        let blogPost = props.blogPosts.filter(blogPost => blogPost.id == props.match.params.id)[0]
        return (
            <div>
                <h1>Title: {blogPost ? blogPost.title: null}</h1><br/>
                 <h1>Content: {blogPost ? blogPost.content : null}</h1>
                <div>
                    <CommentsContainer blogPost={blogPost}/>
                </div>
            </div>
        )
    }
    export default Blog













    

//line 9 is finding a specific blog
//this component renders 1 specific blog
//this component renders the comments container for every show page of a specifc blog
//so we send comments containers an entire blog which has props
//comments container has nothing to do with route we are just sedning blog down to comments container that is already
//associated with page we are on
 // let blogPost = props.blogPosts[props.match.params.id - 1] only use when using redux idx




//functional presentational component
//blogPost is creating a new array with just this blog in it [0] is to access it
//have to use terenary because the first time it renders it doesnt have the accounts so its undefined. 


// class Blog extends React.Component {


//     render () {
//         let blogPost = this.props.blogPosts.filter(blogPost => blogPost.id == this.props.match.params.id)[0]
//         return (
//             <div>
//                 <h1>Title: {blogPost ? blogPost.title: null}</h1><br/>
//                  <h1>Content: {blogPost ? blogPost.content : null}</h1>
      

//                 <div>
//                     <CommentsContainer blogPost={blogPost}/>
//                 </div>
//             </div>
//         )
//     }
// }
//     export default Blog







        // <div className="blogs-grid" >
        //     <Grid >
        //     <Cell col={4}>
        //     <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        //     <CardTitle style={{color: 'black', height: '176px', background: '#'}}>  {blog ? blog.title : null}</CardTitle>
        //     {/* <CardTitle style={{color: 'black', height: '176px', background: '#'}}>{props.blogPost.title}</CardTitle> */}
        //             <CardText>
        //                 {blog ? blog.content : null} 
        //             {/* { props.blogPost.content }  */}
        //             </CardText>
        //             <CardActions border>
        //             {/* <Button colored>
        //             <a href={blog ? blog.url : null}>Medium</a>
        //             </Button> */}
        //             </CardActions>
        //             <CardMenu style={{color: '#fff'}}>
        
        //             </CardMenu>
        //     </Card>
        //     </Cell>
        //     </Grid>
        //     <div>
        //         <CommentsContainer />
        //     </div>
        // </div>
     










//class presentational component

// class Blog extends React.Component {
// 	renderCard = () => {
	
//            return (<div className="projects-grid">
  
//           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
//             <CardTitle style={{color: 'black', height: '176px', background: '#'}}>{this.props.blogPost.title}</CardTitle>
//             <CardText>
//             { this.props.blogPost.content } 
//   </CardText>
//            <CardActions border>
    
//      </CardActions>
//          <CardMenu style={{color: '#fff'}}>
 
//         </CardMenu>
//      </Card>
//         </div>
//            )
//         }


// 	render() {
// 		return (
//             <div>
//             <Grid>
//             <Cell col={12}>
//                 <div className="content">{this.renderCard()}</div>
//             </Cell>
//         </Grid>

//         </div>
// 		);
// 	}
// }


// export default Blog










//this way below could have a redux idx of 3 but an id of 5 in the backend so the id in url would not match
// let blog = props.blogPosts.filter(blog => blog.id === props.match.params.id)[0]