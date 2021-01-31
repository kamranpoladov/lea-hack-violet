import { GoogleMap, LoadScript } from '@react-google-maps/api';

import { useGetCurrentLocation } from '../../services/geolocation';
import { GOOGLE_MAPS_API_KEY } from '../../constants/apiKeyDumbass';
import { useAddressLookup } from '../../services/geolocation/useAddressLookup';
import { LatLngLiteral } from '@googlemaps/google-maps-services-js';

export const MapComponent = () => {
  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const { data: geolocation, isFetching } = useGetCurrentLocation();

  // New York
  const latlng: LatLngLiteral = {
    lat: geolocation?.coords.latitude || 40.47,
    lng: geolocation?.coords.longitude || -73.57
  };

  const { data: addressComponents } = useAddressLookup(latlng);
  console.log(addressComponents);

  // !isFetching && ..., but memo() throws an error
  return isFetching ? null : (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={latlng}
        zoom={10}
      ></GoogleMap>
    </LoadScript>
  );
};
