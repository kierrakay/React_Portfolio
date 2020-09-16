
import React from 'react'
// import Comment from './Comment'
const Comments = (props) => {
//   debugger shows props undefined the defined
//in react and redux on refresh your store clears out
//which means the first time it renders we will get undefined props
//if not going through link directly
console.log('comments component',props.comments)
    return (
        <div>
            {props.comments && props.comments.map(comment =>
       
                <h3 key={comment.id}>{comment.name}-{comment.content}</h3>
            )}
        </div>
    )
}

export default Comments



















// import React from 'react'
// import Comment from './Comment'
// const Comments = (props) => {
  
//     // console.log(props)

//     // use this to see how props are defined instantly when you click comment here button but not if you manually go to a blog via url

// //  debugger
// //notice how it plays using debugger
//     return (
//         <div>
//              {/* remember with react and redux  when you refresh your page your store and state are going to clear out.
//             thats why props are undefined.so we have to check thats its props.comments first then run the next line of code. thats why we add this check. but if they click comment here link we wont have this issue cause our component did mount function in blogs container */}
//             {props.comments && props.comments.map(comment =>
//             //   <Comment comment={comment}/>
//                 <Comment key={comment.id} comment={comment}/>
//             )}
//         </div>
//     )
// }

// export default Comments