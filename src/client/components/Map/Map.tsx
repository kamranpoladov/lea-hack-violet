import { memo } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import { useMyAddressLookup } from '../../services';

const Map = ({ children }: { children?: React.ReactNode }) => {
  const containerStyle: React.CSSProperties = {
    width: '350px',
    height: '400px'
  };

  const { data: myAddress, isFetching } = useMyAddressLookup();

  if (!myAddress || isFetching) return null;

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={{
          fullscreenControl: false,
          streetViewControl: false,
          zoomControl: false
        }}
        center={myAddress.latlng}
        zoom={10}
      >
        {children}
      </GoogleMap>
    </LoadScript>
  );
};

export default memo(Map);
