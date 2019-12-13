import React, { Component } from 'react'
import {getComments} from '../api'
import CommentForm from './CommentForm'
import CommentCard from './CommentCard'

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

                <CommentForm article_id={this.props.article_id}/>


                <div className="commentSection">
                {comments.map((comment) => {
                    return (
                        <CommentCard key={comment.comment_id} comment={comment}/>
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

    componentDidUpdate(prevProps, prevState) {
        if(prevState.comments !== this.state.comments){
            this.fetchComments()
        }
    }
}
