import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div style={{
    color: 'black', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 28.639228,
      lng: 77.362053
    },
    zoom: 17
  };
  renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: this.props.center,
      map,
      title: 'Rio Travels India'
    });
  }
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDlQmjNhAqF80qHh_EItm8XGnB3v-HVpMs' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
        >
        
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;