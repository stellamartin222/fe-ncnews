import React, { Component } from 'react'
import { Router } from '@reach/router';

import Header from "./components/Header"
import Navigation from "./components/navigaton"
import Home from "./components/Home"
import Topics from "./components/Topics"
import Articles from "./components/Articles"
import SingleArticle from './components/SingleArticle';

export default class App extends Component {
    render() {
        return (
            <div>
                <header>
                <Header/>
                </header>
                <nav className="navbar">
                <Navigation/>
                </nav>
            <Router>
                <Home path='/'/>
                <Topics path='/topics'/>
                <Articles path='/articles'/>
                <Articles path="/topics/:topic/articles"/>
                <SingleArticle path="/articles/:article_id"/>
                <SingleArticle path="topics/:topic/articles/:article_id"/>
            </Router>
            </div>
        )
    }
}
