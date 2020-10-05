import React, { Component } from 'react'
import {getMarkers} from '../store'
import {connect} from 'react-redux'

class Sidebar extends Component {
  componentDidMount(){
      this.props.getMarkers()
  }
  render() {
    return (
      <div>
        <h2>LIST</h2>
            {
                this.props.markers.map(marker => {
                    return (
                        <div key={marker.id} className='listItem'>
                            <hr/>
                            <h3>{marker.title}</h3>
                            <p>{marker.date}</p>
                            <p>Description: {marker.contents}</p>
                        </div>
                    )
                })
            }
      </div>
    )
  }
}

const mapState = state => ({
    markers: state
})

const mapDispatch = dispatch => ({
    getMarkers: () => dispatch(getMarkers())
})
  
export default connect(mapState, mapDispatch)(Sidebar)