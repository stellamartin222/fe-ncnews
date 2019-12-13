import React from 'react'
import {deleteComment} from '../api'

export default function CommentCard(props) {
    const removeComment = () => {
        if (props.comment.author === "jessjelly") {
            deleteComment(props.comment.comment_id)
        }
    }
    
    return (
        <div>
        <li className="comments" >
                            <br/>   
                            <p>{props.comment.body}</p>
                            <p>Comment by : {props.comment.author}</p>
                            <p>Votes : {props.comment.votes}</p>
                            <p>Created at : {props.comment.created_at}</p>
                            <button onClick={() => removeComment() }>Delete Comment</button>
                        </li>            
        </div>
    )
}
