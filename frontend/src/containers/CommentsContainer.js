import React from 'react' 
import CommentInput from '../components/comments/CommentInput'
import Comments from '../components/comments/Comments'

class CommentsContainer extends React.Component {
    render () {
        return (
            <div>
                <CommentInput />
                <Comments/>
            </div>
        )
    }

}

export default CommentsContainer