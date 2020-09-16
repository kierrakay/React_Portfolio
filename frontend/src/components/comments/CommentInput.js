import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../actions/addComment'

    class CommentInput extends React.Component {
            state = {
                name: '',
                content: ''
            }
    

        handleChange = event => {
            this.setState({
                [event.target.name]: event.target.value
                // title: event.target.value,
                // content: event.target.value,
            })
        }

        handleSubmit = event => {
            // debugger
            event.preventDefault()
            // this.props.addComment(this.state, blogPost)
            this.props.addComment(this.state, this.props.blogPost.id)
            this.setState({
                name: '',
                content: '',
            })
            // console.log('after submit',event)...console mentiosn synthetic event was is that?
        }
        render () {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>add comment:</label>
                        <input type="name" placeholder="YOUR NAME" name="name" onChange={this.handleChange} value={this.state.name}/>
                        <input type="content" placeholder="CONTENT" name="content" onChange={this.handleChange} value={this.state.content}/>
                        <input type="submit" />
                    </form>
                   
                </div>
            )
        }
    }


    export default connect(null, {addComment})(CommentInput)
// export default connect(null, {addComment})(CommentInput)


//name and value in form make it a controlled form using local state
//handleSubmit is asychrounous meaning it wont clear form out till everything is run