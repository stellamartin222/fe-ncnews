import React, { Component } from 'react'
import { Router } from '@reach/router';

import Header from "./components/Header"
import Navigation from "./components/navigaton"
import Home from "./components/Home"
import Topics from "./components/Topics"
import Articles from "./components/Articles"

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Navigation/>
            <Router>
                <Home path='/'/>
                <Topics path='/topics'/>
                <Articles path='/articles'/>
            </Router>
            </div>
        )
    }
}
