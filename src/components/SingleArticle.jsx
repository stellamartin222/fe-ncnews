import React, { Component } from 'react'
import {getSingleArticle, getComments} from '../api'


export default class SingleArticle extends Component {
    state = {
        article : [],
        comments : []
    }

    render() {
    const article = this.state.article
    const comments = this.state.comments
        return (
            <div key={article.id}>
                <h2>{article.title}</h2>
                <p>{article.topic}</p>
                <p>{article.author}</p>
                <h3>{article.body}</h3>
                <br/>
                <h4>Comments:-</h4>
                <div className="commentSection">
                {comments.map((comment) => {
                    return (
                        
                        <li className="comments" key={comment.comment_id}>
                            <br/>   
                            <p>{comment.body}</p>
                            <p>Comment by : {comment.author}</p>
                            <p>Votes : {comment.votes}</p>
                        </li>
                        
                    )
                })}
                </div>
            </div>
        )
    }

    componentDidMount() {
        getSingleArticle(this.props.article_id)
        .then(article => {
            this.setState({article: article})
        })
        .then(() => {
            return getComments(this.state.article.article_id)
        })
        .then(comments => {
            console.log({comments: comments})
            this.setState({comments: comments})
        })
    }
}
