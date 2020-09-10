import React from 'react'
// import { Redirect } from 'react-router-dom'
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText} from 'react-mdl'



//functional presentational component
const Blog = (props) => {
let blog = props.blogPosts[props.match.params.id - 1]

    return (

        <div className="blogs-grid" >
        <Grid >
        <Cell col={4}>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '176px', background: '#'}}>  {blog ? blog.title : null}</CardTitle>
           {/* <CardTitle style={{color: 'black', height: '176px', background: '#'}}>{props.blogPost.title}</CardTitle> */}
                <CardText>
                    {blog ? blog.content : null}
                {/* { props.blogPost.content }  */}
                </CardText>
                <CardActions border>
                <Button colored>Medium</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
    
                </CardMenu>
      </Card>
      </Cell>
      </Grid>


        </div>
     
    )
}

export default Blog








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








