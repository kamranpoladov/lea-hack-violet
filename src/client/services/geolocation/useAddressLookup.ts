import { useQuery } from 'react-query';
import {
  AddressComponent,
  LatLngLiteral
} from '@googlemaps/google-maps-services-js';

import { QUERY_KEYS } from '../../constants';
import { GOOGLE_MAPS_API_KEY } from '../../constants/apiKeyDumbass';
import { GoogleMapsClient } from '../../utils';

export const addressLookup = async (
  latlng: LatLngLiteral
): Promise<AddressComponent[][]> => {
  const {
    data: { results: geocodeResults }
  } = await GoogleMapsClient.reverseGeocode({
    params: { latlng, key: GOOGLE_MAPS_API_KEY }
  });

  return geocodeResults.map(({ address_components }) => address_components);
};

export const useAddressLookup = (latlng: LatLngLiteral) =>
  useQuery(QUERY_KEYS.ADDRESS_LOOKUP, () => addressLookup(latlng));
