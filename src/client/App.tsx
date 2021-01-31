import React from 'react';
import { Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';

import { history, queryClient } from './utils';
import { Root } from './Root';
import { LocationMask } from './components';

export const App = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        <Root />
      </Router>
    </QueryClientProvider>
  </>
);
