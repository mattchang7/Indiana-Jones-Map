import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import {connect} from 'react-redux'
import Marker from './Marker'
  
class Map extends Component {
    constructor(props){
        super(props);
        this.handleGoogleMapApi = this.handleGoogleMapApi.bind(this);
    }
    static defaultProps = {
        center: {lat: 43, lng: 10},
        zoom: 0
    }
    handleGoogleMapApi(google){
        let coords = []
        const lineSymbol = {
            path: "M 0,-1 0,1",
            strokeOpacity: 1,
            scale: 4,
        }
        const plane = {
            path: google.maps.SymbolPath.CIRCLE,
            strokeOpacity: 1,
            scale: 6,
            strokeColor: "navy",
        }
        this.props.markers.forEach(marker => {
            coords.push({
                lat: parseFloat(marker.latitude),
                lng: parseFloat(marker.longitude)
            })
        })
        let flightPath = new google.maps.Polyline({
          path: coords.reverse(),
          geodesic: true,
          strokeColor: 'red',
          strokeOpacity: 0,
          strokeWeight: 3,
          icons: [
            {
                icon: plane,
                offset: "100%"
            },
            {
                icon: lineSymbol,
                offset: "0",
                repeat: "20px",
            }
          ]
        })
        function animateCircle(line) {
            let count = 0;
            window.setInterval(() => {
              count = (count + 1) % 200;
              const icons = line.get("icons");
              icons[0].offset = count / 2 + "%";
              line.set("icons", icons);
            }, 50);
        }
  
        flightPath.setMap(google.map);
        animateCircle(flightPath)
    }
    render() {     
        return (
            <div style={{ height: '100vh', width: '70%' }}>
                <GoogleMap
                    bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    options={{
                        styles: require('../GoogleMapStyles.json')
                    }}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={this.handleGoogleMapApi}
                >
                    {
                        this.props.markers.map((marker, index) => {
                            return (
                                <Marker key={index} lat={marker.latitude} lng={marker.longitude} title={marker.title}/>
                            )
                        })
                    }
                </GoogleMap>
            </div>
        );
    }
}

const mapState = state => ({
    markers: state
})
  
export default connect(mapState)(Map)