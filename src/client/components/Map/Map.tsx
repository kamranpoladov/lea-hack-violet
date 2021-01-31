import { memo } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import { useMockHosts, useMyAddressLookup } from '../../services';

const Map = ({ children }: { children?: React.ReactNode }) => {
  const containerStyle: React.CSSProperties = {
    width: '350px',
    height: '400px'
  };

  const { data: myAddress, isFetching } = useMyAddressLookup();

  const hosts = useMockHosts(10);

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
        zoom={13}
      >
        {hosts?.map((host, i) => (
          <Marker
            key={i}
            position={{ lat: host.location.lat, lng: host.location.lng }}
          />
        ))}
        {children}
      </GoogleMap>
    </LoadScript>
  );
};

export default memo(Map);
