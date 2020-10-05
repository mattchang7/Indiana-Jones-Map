import React, { Component } from 'react';
import Navbar from './components/NavBar'
import Routes from './components/Routes'

export default class App extends Component {
  render() {
    return (
      <div id='main'>
        <Navbar/>
        <Routes/>
      </div>
    )
  }
}