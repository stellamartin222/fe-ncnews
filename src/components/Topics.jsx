import React, { Component } from 'react'
import axios from 'axios'
import {Link} from '@reach/router'

export default class Topics extends Component {
    state = {
        topics: []
    };

    render() {
        return (
            <div>
                <h2>TOPICS</h2>
                {this.state.topics.map((topic) => {
                    return (
                        <li key={topic.slug}>
                            <Link to={`/topics/${topic.slug}/articles`}>
                            <h3>{topic.slug}</h3>
                            <p>{topic.description}</p>
                            </Link>
                        </li>
                    )
                })}
            </div>
        )
    }

    componentDidMount() {
        axios.get("https://sm-ncnews.herokuapp.com/api/topics")
        .then((topic) => {
            this.setState({topics: topic.data.topics})
        })
    }
}
