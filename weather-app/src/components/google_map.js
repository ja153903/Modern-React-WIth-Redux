import React, { Component } from 'react';
// ref system allows us to get a direct reference
// to an html element on the page
class GoogleMap extends Component {
  // componentDidMount() a lifecycle method after the component is rendered on the screen
  // you do this for third party libraries
  componentDidMount() {
    // Create embeded google map on page
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return (
      <div ref="map" />
    );
  }
}

export default GoogleMap;
