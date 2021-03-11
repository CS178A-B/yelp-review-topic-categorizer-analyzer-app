import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Restaurant } from './RestaurantPage.js';

const WIDTH = 20;
const HEIGHT = 20;

const markerStyle = {
  position: 'absolute',
  borderRadius: '50%',
  border: '5px solid #c41200',
  backgroundColor: 'white',
  width: WIDTH,
  height: HEIGHT,
  left: -WIDTH / 2,
  top: -HEIGHT / 2, 
};

const textStyle = {
    paddingLeft: WIDTH,
    whiteSpace: 'nowrap',
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '1.2em',
}

const Marker = () => <div style={markerStyle}><div style={textStyle}>{Restaurant.name}</div></div>;

class MapView extends Component {

    static defaultProps = {
        zoom: 10,
     }
  
    render() {
      return (
        <div style={{ height: '60vh', width: '100%', padding: '3%'}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.MAPS_API }}
            defaultZoom={this.props.zoom}
            center={[Restaurant.latitude, Restaurant.longitude]}
          >
            <Marker
              lat={Restaurant.latitude}
              lng={Restaurant.longitude}
            />
          </GoogleMapReact>
        </div>
      );
    };
};
  
export default MapView;
