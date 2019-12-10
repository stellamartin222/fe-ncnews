import React, { Component } from 'react'
import {Link} from '@reach/router'
import {getTopics} from "../api"
 
export default class Topics extends Component {
    state = {
        topics: [],
        isLoading: true
    };

    render() {
        {const { isLoading } = this.state
        if (isLoading) return <p>loading...</p>}
        return (
                          
            <div className="linkItem">
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
        getTopics()
        .then((topics) => {
            this.setState({topics: topics, isLoading: false})
        })
    }
}
