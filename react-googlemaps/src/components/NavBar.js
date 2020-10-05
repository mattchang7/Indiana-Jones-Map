import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../App.css'

export default class Navbar extends Component {
  render() {
    return (
      <div id='nav'>
        <h1>NAVBAR</h1>
        <div id='links'>
            <Link to='/story'><h2>LIST</h2></Link>
            <Link to='/'><h2>MAP</h2></Link>
        </div>
      </div>
    )
  }
}