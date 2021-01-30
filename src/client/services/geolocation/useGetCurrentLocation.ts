import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../constants';

async function getCurrentGeolocation(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const useGetCurrentLocation = () =>
  useQuery(QUERY_KEYS.CURRENT_LOCATION, () => getCurrentGeolocation());
