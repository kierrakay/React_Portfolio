import React from 'react'

const Blogs = (props) => {
    // const Blogs = ({blogPosts, secondprop}) => {
    console.log('blogscomponent', props)
    // console.log('blogscomponent', secondprop)
return (
    <div>
        {props.blogPosts.map(blogPost => <li key={blogPost.id}>{blogPost.title} - {blogPost.content}</li>)}
         {/* blogPosts */}
    </div>
)

}

export default Blogs





// import React from 'react'

// class Blogs extends React.Component {
   
//     render () {
//         return (
//             <div >
          
//                 <h1>Blogs Component. </h1>
//             </div>
//         )
//     }
// }

// export default Blogs