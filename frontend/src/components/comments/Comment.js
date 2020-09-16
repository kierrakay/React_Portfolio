
import React from 'react'

const Comment = (props) => {
  
    // console.log(props)
    // use this to see how props are defined instantly when you click comment here button but not if you manually go to a blog via url
    //  debugger
    //notice how it plays using debugger
    return (
        <div>
            <h3> {props.comment.name} - {props.comment.content}</h3>  
        </div>
    )
}

export default Comment