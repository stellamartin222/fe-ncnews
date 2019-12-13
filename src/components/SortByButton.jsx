import React from 'react'

export default function SortByButton(props) {
    const handleSubmit = (event) => {
        props.getOrder(event.target.value)
    }
    return (
        <div className="sortByButtons">
                    <p>Sort By :</p>
                    <button onClick={handleSubmit} value="created_at">Recent</button>
                    <button onClick={handleSubmit} value="comment_count">Number of comments</button>
                    <button onClick={handleSubmit} value="votes">Votes</button>
                    
                </div>
    )
}
