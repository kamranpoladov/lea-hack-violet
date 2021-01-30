import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import { getCurrentGeolocation } from '../utils/mapUtils';

function MapComponent() {
  const [containerStyle, setContainerStyle] = useState({
    width: "400px",
    height: "400px"
  });

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [geolocation, setGeolocation] = useState({lat: 0, lng: 0});

  useEffect(() => {
    (async () => {
      const { coords: { latitude: lat, longitude: lng } } = await getCurrentGeolocation();
      console.log(lat, lng);
      setGeolocation({ lat, lng });
    })();
  }, []);

  return (
    <LoadScript googleMapsApiKey='AIzaSyD8uu--1LNto-0Qg7YMkr7qQCbeQq8WJhU'>
      <GoogleMap mapContainerStyle={containerStyle} center={geolocation} zoom={10}></GoogleMap>
    </LoadScript>
  )
}


// ?
export default React.memo(MapComponent);