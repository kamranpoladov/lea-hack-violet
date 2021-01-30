import React from 'react';
import { QueryClientProvider } from 'react-query';

import TestComponent from './TestComponent';
import { queryClient } from './utils';

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <TestComponent />
  </QueryClientProvider>
);
