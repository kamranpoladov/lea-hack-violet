import { memo } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import { GOOGLE_MAPS_API_KEY } from '../../constants';
import { useMyAddressLookup } from '../../services/';

export const MapComponent = () => {
  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const { data: myAddress, isFetching } = useMyAddressLookup();

  if (!myAddress || isFetching) return null;

  // !isFetching && ..., but memo() throws an error
  return <>{myAddress.flat().map(address => address.long_name)}</>;
  /*isFetching ? null : (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={latlng}
        zoom={10}
      ></GoogleMap>
    </LoadScript>
  );*/
};

export default memo(MapComponent);
