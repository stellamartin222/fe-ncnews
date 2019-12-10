import React, { Component } from 'react'
import {getComments} from '../api'
import CommentForm from './CommentForm'

export default class Comments extends Component {
    state = {
        comments : [],
        isLoading: true
    }

    render() {
        {const { isLoading } = this.state
        if (isLoading) return <p>loading Comments...</p>}
        const comments = this.state.comments
        return (
            <div>
                <h4>Comments:-</h4>

                <CommentForm />


                <div className="commentSection">
                {comments.map((comment) => {
                    return (
                        
                        <li className="comments" key={comment.comment_id}>
                            <br/>   
                            <p>{comment.body}</p>
                            <p>Comment by : {comment.author}</p>
                            <p>Votes : {comment.votes}</p>
                            <p>Created at : {comment.created_at}</p>
                        </li>
                        
                    )
                })}
                </div>
            </div>
        )
    }



    fetchComments = () => {
        getComments(this.props.article_id)
            .then(comments => {
                this.setState({comments: comments, isLoading: false})
            })
    }


    componentDidMount() {
        this.fetchComments()
    }
}
