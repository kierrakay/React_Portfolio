import React from 'react' 
import CommentInput from '../components/comments/CommentInput'
import Comments from '../components/comments/Comments'

class CommentsContainer extends React.Component {
    // myFunc() {
    //     return this.props.blogPost && this.props.blogPost.comments
    // }
    render () {
        return (
            <div>
                <CommentInput blogPost={this.props.blogPost}/>
                {/* have to do && (issa shorthand teranary) because upon refresh on the show page the redux store clears out and we lose our props. first 
                refresh is always undefined its the 2nd render that grabs the props. so basically if this.props.blogPost exists then go to this.props.blog.comments */}
                {/* <Comments comments={this.myFunc()} /> */}
                <Comments comments={this.props.blogPost && this.props.blogPost.comments} />
            </div>
        )
    }

}

export default CommentsContainer