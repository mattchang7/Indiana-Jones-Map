import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Story from './Story'
import Main from './Main'

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/story' component={Story}/>
                <Route exact path='/' component={Main}/>
            </Switch>
        )
    }
}