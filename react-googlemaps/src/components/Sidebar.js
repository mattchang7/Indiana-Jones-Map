import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMarker } from '../store'

class Sidebar extends Component {
  constructor() {
      super()
      this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
      e.preventDefault()
      const marker = {
          title: e.target.title.value,
          contents: e.target.description.value,
          latitude: Number(e.target.latitude.value),
          longitude: Number(e.target.longitude.value),
          date: e.target.date.value
      }
      this.props.addMarker(marker)
      e.target.title.value = ''
      e.target.description.value = ''
      e.target.latitude.value = ''
      e.target.longitude.value = ''
      e.target.date.value = ''
  }
  render() {
    return (
      <div id='sidebar'>
        <form onSubmit={this.handleSubmit}>
          <div className='inputBox'>
            <h3 id="addProduct">Add Marker</h3>
          </div>
          <div className='inputBox'>
            <label htmlFor="name">
              <small>Title</small>
            </label>
            <input  name="title" type="text" required />
          </div>
          <div className='inputBox'>
            <label htmlFor="description">
              <small>Description</small>
            </label>
            <input name="description" type="text" />
          </div>
          <div className='inputBox'>
            <label htmlFor="latitude">
              <small>Latitude</small>
            </label>
            <input name="latitude" type="text" required />
          </div>
          <div className='inputBox'>
            <label htmlFor="longitude">
              <small>Longitude</small>
            </label>
            <input name="longitude" type="text" required />
          </div>
          <div className='inputBox'>
            <label htmlFor="date">
              <small>Date</small>
            </label>
            <input name="date" type="date" required />
          </div>
          <div className='inputBox'>
            <button className="submitMarker" type="submit">
                SUBMIT
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapState = state => ({
    markers: state
})

const mapDispatch = dispatch => ({
    addMarker: (marker) => {
        dispatch(addMarker(marker))
    }
})

export default connect(mapState, mapDispatch)(Sidebar)