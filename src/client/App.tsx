import React from 'react';
import { QueryClientProvider } from 'react-query';

import MapComponent from './components/MapComponent';
import { queryClient } from './utils';

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <MapComponent />
  </QueryClientProvider>
);
