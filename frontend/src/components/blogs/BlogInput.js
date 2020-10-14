import React from 'react'
import { connect } from 'react-redux'
import { addBlog } from '../../actions/addBlog'


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

     
          handleSubmit = event => {
            event.preventDefault()
            this.props.addBlog(this.state)
            // console.log('state',this.state)
            alert("Blog Submitted!")
            this.setState({
                title: '',
                content: '',
                link: '',
                image: null
        
            })
            // console.log('after submit',event)
        }
       
       
        render () {
            return (
                <div>
                    <form onSubmit={this.handleSubmit} >
                        <label>add blog:</label>
                        <input type="title" placeholder="TITLE" name="title" onChange={this.handleChange} value={this.state.title}/>
                        <input type="content" placeholder="CONTENT" name="content" onChange={this.handleChange} value={this.state.content}/>
                        <input type="link" placeholder="LINK" name="link" onChange={this.handleChange} value={this.state.link}/>
                        {/* <input type="file"
                            id="blog-photo-input" name="image"
                            // accept="image/png, image/jpeg"
                            accept="image/*"
                        /> */}
                        <input
                            className="submit-input"
                            type="submit"
                            // value="Upload"
                        />
                        {/* <input type="file" name='image' /> */}
                        {/* <input type="file"  accept="image/*" multiple={false} onChange={this.onImageChange} /> */}
                        {/* <input type="submit" /> */}
                    </form>                
                </div>
            )
        }
    }
export default connect(null, { addBlog })(BlogInput)


//for image upload
        //   onImageChange = event => { 
        //     this.setState({ image: event.target.files[0]});
        //     console.log('check', this.state.image)
        //   };


//for aws
        // handleSubmit = (event) => {
        //     event.preventDefault();
        //     let blogInput = document.getElementById('blog-photo-input');
        //     if (blogInput.files[0]) {
        //       const formData = new FormData();
        //       const upload_file = blogInput.files[0]
        //       formData.append('blog_picture', upload_file);
        //       this.props.addBlog(formData)
        //       console.log('check', formData)
        //     }
            
        //   }

           // handleSubmit = event => {
        //     event.preventDefault()
        //     const formData = new FormData(event.target)
        //  // to see formdata. console log doesnt work
        //     // for (var pair of formData.entries()) {
        //     //     console.log(pair[0]+ ' - ' + pair[1]); 
        //     // }
        //    this.props.addBlog(formData)
        //       .then(data => this.props.setPost(data.blog_post))
        //       .catch(console.error);
        //   }
