import React from 'react'
import { connect } from 'react-redux'

    class BlogInput extends React.Component {
            state = {
                title: '',
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
            event.preventDefault()
            // this.props.blogPosts(this.state)
            this.props.addBlog(this.state)
            this.setState({
                title: '',
                content: '',
            })
        }
        render () {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>add blog:</label>
                        <input type="title" placeholder="title" name="title" onChange={this.handleChange} value={this.state.title}/>
                        <input type="content" placeholder="content" name="content" onChange={this.handleChange} value={this.state.content}/>
                        <input type="submit" />
                    </form>
                   
                </div>
            )
        }
    }

    const mapDispatchToProps = dispatch => ({
        addBlog: formData => dispatch ({ type: 'ADD_BLOG', payload: formData })
    })

export default connect(null, mapDispatchToProps)(BlogInput)