import React from 'react'
import { connect } from 'react-redux'
import { addBlog } from '../../actions/addBlog'

    class BlogInput extends React.Component {
        state = {
            title: '',
            content: '',
            url: ''
        }

        handleChange = event => {
            this.setState({
                [event.target.name]: event.target.value
                // title: event.target.value,
                // content: event.target.value,
            })
        }

        handleSubmit = event => {
            event.preventDefault()
            this.props.addBlog(this.state)
            alert("Blog Submitted!")
            this.setState({
                title: '',
                content: '',
                url: ''
            })
            // console.log('after submit',event)...console mentiosn synthetic event was is that?
        }
        render () {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>add blog:</label>
                        <input type="title" placeholder="TITLE" name="title" onChange={this.handleChange} value={this.state.title}/>
                        <input type="content" placeholder="CONTENT" name="content" onChange={this.handleChange} value={this.state.content}/>
                        <input type="url" placeholder="url" name="url" onChange={this.handleChange} value={this.state.url}/>
                        <input type="submit" />
                    </form>                
                </div>
            )
        }
    }
export default connect(null, { addBlog })(BlogInput)