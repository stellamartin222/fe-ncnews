import React, { Component } from 'react'
import axios from 'axios'
import {Link} from '@reach/router'

export default class Articles extends Component {
    state =  {
        articles: []
    }
    

    render() {
        return (
            <div>
                <h2 className="articleCards">ARTICLES</h2>
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

    componentDidMount() {
        axios.get("https://sm-ncnews.herokuapp.com/api/articles")
        .then((article) => {
            console.log({articles: article.data.articles})
            this.setState({articles: article.data.articles})
        })
    }
}
