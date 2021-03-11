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

      const Marker = () => <div style={markerStyle}><div style={textStyle}>{restaurant.name}</div></div>;
      return (
        <div style={{ height: '60vh', width: '100%', padding: '0'}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDzHP_MAk5Kq9u_eW5zuoBDvPd1GEfjWKY" }}
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
