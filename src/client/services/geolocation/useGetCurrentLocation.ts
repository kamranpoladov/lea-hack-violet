import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../constants';
import { getCurrentGeolocation } from '../../utils';

export const useGetCurrentLocation = () =>
  useQuery(QUERY_KEYS.CURRENT_LOCATION, () => getCurrentGeolocation());
