import React from 'react'
import Map from './Map'
import Sidebar from './Sidebar'
import '../index.css'
import {getMarkers} from '../store'
import {connect} from 'react-redux'

class Main extends React.Component {
    componentDidMount(){
        this.props.getMarkers()
    }
    render() {
        return (
            <div id='body'>
                <Sidebar/>
                <Map markers={this.props.markers}/>
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

export default connect(mapState, mapDispatch)(Main)