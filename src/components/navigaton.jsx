import React from 'react'
import {Link} from '@reach/router'


export default function Navigaton() {
    return (
        <nav className="nav-bar">
            <Link to="/">
            <button className="menuButtons">Home</button>
            </Link>

            

            <Link to="/topics">
                <button className="menuButtons">Topics</button>
            </Link>
            
            {/* <select> 
                <Link to="/topics">
                <option>Topics</option>
                </Link>
                <Link to="/topics/coding">
                <option>Coding</option>
                </Link>
                <Link to="/topics/football">
                <option>Football</option>
                </Link>
                <Link to="/topics/cooking">
                <option>Cooking</option>
                </Link>
            </select> */}
           

            

            <Link to="/articles">
            <button className="menuButtons">Articles</button>
            </Link>
        </nav>
    )
}
