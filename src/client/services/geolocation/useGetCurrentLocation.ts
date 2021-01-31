import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../constants';

export const getCurrentGeolocation = async (): Promise<GeolocationPosition> =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

export const useGetCurrentLocation = () =>
  useQuery(QUERY_KEYS.CURRENT_LOCATION, () => getCurrentGeolocation(), {
    staleTime: Infinity
  });
