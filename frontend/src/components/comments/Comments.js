import React from 'react'

const Comments = (props) => {
    // console.log(props)
    // use this to see how props are defined instantly when you click comment here button but not if you manually go to a blog via url

//  debugger
//notice how it plays using debugger
    return (
        <div>
            {/* remember with react and redux  when you refresh your page your store and state are going to clear out.
            thats why props are undefined.so we have to check thats its props.comments first then run the next line of code. thats why we add this check. but if they click comment here link we wont have this issue cause our component did mount function in blogs container */}
             {props.comments && props.comments.map(comment =>
                <h2 key={comment.id}>{comment.name} - {comment.content}</h2>
                )}
        </div>
    )

}

export default Comments