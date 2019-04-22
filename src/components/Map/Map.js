import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { ReactComponent as Mark } from './assets/mark.svg';

import styles from './Map.module.css';

const Marker = () => (
  <div className={styles.marker}>
    <Mark />
  </div>
);

export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 50.450252,
      lng: 30.523937,
    },
    zoom: 16,
  };

  state = {};

  render() {
    const { center, zoom } = this.props;
    console.log(this.props);
    return (
      <div className={styles.map}>
        <GoogleMapReact
          //   bootstrapURLKeys={{ key: 1 }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker lat={50.450887} lng={30.524388} />
        </GoogleMapReact>
      </div>
    );
  }
}
