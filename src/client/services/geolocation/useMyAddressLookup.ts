import { LatLngLiteral } from '@googlemaps/google-maps-services-js';
import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../constants';
import { addressLookup } from './useAddressLookup';
import { getCurrentGeolocation } from './useGetCurrentLocation';

const myAddressLookup = async () => {
  const { coords } = await getCurrentGeolocation();
  const latlng: LatLngLiteral = {
    lat: coords.latitude,
    lng: coords.longitude
  };

  return await addressLookup(latlng);
};

export const useMyAddressLookup = () =>
  useQuery(QUERY_KEYS.MY_ADDRESS_LOOKUP, () => myAddressLookup());
