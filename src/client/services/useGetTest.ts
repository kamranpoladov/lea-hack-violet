import { useQuery } from 'react-query';
import { getTest } from '../../types';
import { QUERY_KEYS } from '../constants';

export const useGetTest = () => useQuery(QUERY_KEYS.TEST, () => getTest());
