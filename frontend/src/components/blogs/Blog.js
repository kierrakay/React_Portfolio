import React from 'react'

const Blog = props => {
    return (
        <div>
        <li>{props.title} - {props.content}</li>
        </div>
    )
}

//     class Blog extends React.Component {
//         render () {
//             return (
//                 <div>
//                     <h1>Blog Component</h1>
//                 </div>
//             )
//         }
// }

export default Blog
