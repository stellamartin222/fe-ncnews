import React from 'react'
import {Link} from '@reach/router'


export default function Navigaton() {
    return (
        <nav className="nav-bar">
            <Link to="/">
            <button>Home</button>
            </Link>
            <br/>
            <Link to="/topics">
            <button>Topics</button>
            </Link>
            <br/>
            <Link to="/articles">
            <button>Articles</button>
            </Link>
        </nav>
    )
}
