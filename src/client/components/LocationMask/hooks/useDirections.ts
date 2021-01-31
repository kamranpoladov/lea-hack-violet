import { useQuery } from 'react-query';
import {
  DirectionsResponse,
  LatLngLiteral,
  TravelMode
} from '@googlemaps/google-maps-services-js';

import { QUERY_KEYS } from '../../../constants';
import { GOOGLE_MAPS_API_KEY } from '../../../constants/apiKeyDumbass';
import { GoogleMapsClient } from '../../../utils';

export const directions = async (
  origin: LatLngLiteral,
  destination: LatLngLiteral,
  travelMode: TravelMode
): Promise<DirectionsResponse> => {
  const directions = await GoogleMapsClient.directions({
    params: { origin, destination, mode: travelMode, key: GOOGLE_MAPS_API_KEY }
  });

  return directions;
};

export const useDirections = (
  origin: LatLngLiteral,
  destination: LatLngLiteral,
  travelMode: TravelMode
) =>
  useQuery(QUERY_KEYS.DIRECTIONS, () =>
    directions(origin, destination, travelMode)
  );
