import React, { Component } from 'react'
import {postComment} from '../api'

export default class CommentForm extends Component {
    state = {
        commentInput : ''
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Add Comment:
                    <input onChange={this.handleChange} type="text" placeholder="Write here...."/>
                </label>
                <button>Submit Comment</button>
            </form>
        )
    }

    handleChange = (event) => {
        this.setState({commentInput : event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        postComment(this.props.article_id, this.state.commentInput)
        // create post function
        // use it here
        // THEN add it to comments
        //  - define in Comments
        //  - pass down on props
    }
}
