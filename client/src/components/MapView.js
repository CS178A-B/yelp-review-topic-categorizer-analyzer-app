import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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



class MapView extends Component {

    static defaultProps = {
        zoom: 10,
     }
  
    render() {
      const restaurant = this.props;
      console.log(restaurant);

      function undefinedHandler(value) {
        console.log(value)
        if (typeof(value) == "undefined") {
          return 0.0
        }
        return value
      }

      undefinedHandler(restaurant);

      const Marker = () => <div style={markerStyle}><div style={textStyle}>{restaurant.name}</div></div>;
      return (
        <div class="map-view">
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.MAPS_API }}
            defaultZoom={10}
            center={[parseInt(restaurant.lat), parseInt(restaurant.lng)]}
          >
            <Marker
              lat={parseInt(restaurant.lat)}
              lng={parseInt(restaurant.lng)}
            />
          </GoogleMapReact>
        </div>
      );
    };
};
  
export default MapView;
