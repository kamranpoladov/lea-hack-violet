import { memo } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import { useGetCurrentLocation } from '../../services/geolocation';

function MapComponent() {
  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const { data: geolocation, isFetching } = useGetCurrentLocation();

  if (!geolocation || isFetching) return null;

  return (
    <LoadScript googleMapsApiKey="AIzaSyD8uu--1LNto-0Qg7YMkr7qQCbeQq8WJhU">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: geolocation.coords.latitude,
          lng: geolocation.coords.longitude
        }}
        zoom={10}
      ></GoogleMap>
    </LoadScript>
  );
}

export default memo(MapComponent);
