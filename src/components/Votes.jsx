import React, { Component } from 'react'
import { updateVotes } from '../api'

export default class Votes extends Component {
    state = {
        newVote : 0
    }

    render() {
        return (
            <div>
                <label>
                    <button onClick={() => this.changeVotes(1)}>+</button>
                        Votes : {this.props.votes + this.state.newVote}
                    <button onClick={() => this.changeVotes(-1)}>-</button>
                </label>
            </div>
        )
    }

    changeVotes = (num) => {
        this.setState((prevState) => {
           return {newVote: prevState.newVote + num}
        })
        updateVotes(this.props.article_id, this.state.newVote)
    }

}
