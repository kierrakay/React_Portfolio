import React from 'react'
import { connect } from 'react-redux'
import { addBlog } from '../../actions/addBlog'
// import Dropzone from 'react-dropzone'

    class BlogInput extends React.Component {
        state = {
            title: '',
            content: '',
            link: '',
            image: null
       
        }
        
        
        handleChange = event => {
            this.setState({
                [event.target.name]: event.target.value
                // title: event.target.value,
                // content: event.target.value,
            })
        }
          onImageChange = event => { 
            this.setState({ image: event.target.files[0]});
          };

     
          handleSubmit = event => {
            event.preventDefault()
            this.props.addBlog(this.state)
            console.log('state',this.state)
            alert("Blog Submitted!")
            this.setState({
                title: '',
                content: '',
                link: '',
                image: null
        
            })
            console.log('after submit',event)
        }

    
       
     
        render () {
            return (
                <div>
                    <form onSubmit={this.handleSubmit} >
                        <label>add blog:</label>
                        <input type="title" placeholder="TITLE" name="title" onChange={this.handleChange} value={this.state.title}/>
                        <input type="content" placeholder="CONTENT" name="content" onChange={this.handleChange} value={this.state.content}/>
                        <input type="link" placeholder="LINK" name="link" onChange={this.handleChange} value={this.state.link}/>
                        <input type="file" name='image' />
                        {/* <input type="file"  accept="image/*" multiple={false} onChange={this.onImageChange} /> */}
                        <input type="submit" />
                    </form>                
                </div>
            )
        }
    }
export default connect(null, { addBlog })(BlogInput)





   //   handleSubmit = event => {
        //     event.preventDefault();
        //     const formData = new FormData();
        //     formData.append('title', this.state.title);
        //     formData.append('content', this.state.content);
        //     formData.append('link', this.state.link);
        //     formData.append('image', this.state.image);
        //     fetch('http://localhost:3000/api/v1/blog_posts', {
        //       method: 'POST',
        //       body: formData
        //     })
        //     .catch(error=>console.log(error));

        // }


            // handleSubmit = event => {
        //     event.preventDefault();
        //     const formData = new FormData();
        //     formData.append('title', this.state.title);
        //     formData.append('content', this.state.content);
        //     formData.append('link', this.state.link);
        //     formData.append('image', this.state.image);
        //     // this.props.addBlog(formData)
        //     console.log(formData)
        //     fetch('http://localhost:3000/api/v1/blog_posts', {
        //         headers: { 'content-type': 'multipart/form-data' },
        //       method: 'POST',
        //       body: formData
        //     })
        //     .catch(error=>console.log(error));
        // }




            // handleSubmit = event => {
            //     event.preventDefault()
           
            //     const blogPost = new FormData();
            //     blogPost.append('blogPost[title]', this.state.title)
            //     blogPost.append('blogPost[content]', this.state.content)
            //     blogPost.append('blogPost[url]', this.state.url)
            //     blogPost.append('blogPost[image]', this.state.image)
            // //    console.log('state', blogPost)
            //     this.props.addBlog(blogPost)
            //     alert("Blog Submitted!")
            //         this.setState({
            //             title: '',
            //             content: '',
            //             link: '',
            //             image: null
                
            //         })
            // }
      

        //   handleSubmit = event => {
        //     event.preventDefault()
        //     const formData = new FormData()
        //     formData.append('title', this.state.title)
        //     formData.append('content', this.state.content)
        //     formData.append('url', this.state.url)
        //     formData.append('image', this.state.iamge)
        //     this.props.addBlog(this.formData)
        //     console.log(formData)
        //     alert("Blog Submitted!")
            // this.setState({
            //     title: '',
            //     content: '',
            //     url: '',
            //     image: null
            // })
            // console.log('after submit',event)
        // }
