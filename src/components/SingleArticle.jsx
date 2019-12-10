import React, { Component } from 'react'
import Comments from './Comments'
import {getSingleArticle} from '../api'


export default class SingleArticle extends Component {
    state = {
        article : [],
        comments : [],
        isLoading: true
    }

    render() {
    const article = this.state.article
    {const { isLoading } = this.state
        if (isLoading) return <p>loading Article...</p>}
    
        return (
            <div key={article.id}>
                <h2>{article.title}</h2>
                <p>{article.topic}</p>
                <p>{article.author}</p>
                <h3>{article.body}</h3>
                <br/>
                <Comments article_id={this.props.article_id}/>
            </div>
        )
    }

    componentDidMount() {
        getSingleArticle(this.props.article_id)
        .then(article => {
            this.setState({article: article, isLoading: false})
        })
    }
}