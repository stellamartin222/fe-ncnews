import React, { Component } from 'react'
import {getArticles} from '../api'
import {Link} from '@reach/router'
import SortByButton from "./SortByButton"

export default class Articles extends Component {
    state =  {
        articles: [],
        isLoading: true,
        sortBy : null
    }
    

    render() {
        {const { isLoading } = this.state
        if (isLoading) return <p>loading Articles...</p>}
        return (
            <div>
                <h2 className="articleCards">ARTICLES</h2>
                <SortByButton getOrder={this.getOrder}/>
                {this.state.articles.map((article) => {
                    return (
                        
                        <li key={article.article_id}>
                            <Link to={`/articles/${article.article_id}`}>
                            <h3>{article.title}</h3>
                            <p>Comments : {article.comment_count}</p>
                            <p>Votes : {article.votes}</p>
                            </Link>
                        </li>
                        
                    )
                })}
            </div>
        )
    }

    getOrder = event => {
        this.setState({ sortBy: event})
    }

    fetchArticles() {
        getArticles(this.props.topic, this.state.sortBy)
        .then(articles => {
            this.setState({articles: articles, isLoading: false})
        })
    }

    componentDidMount() {
        this.fetchArticles()
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.sortBy !== this.state.sortBy) {
            this.fetchArticles()
        }
    }
}
