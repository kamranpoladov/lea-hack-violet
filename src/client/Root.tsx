import { Route, Switch } from 'react-router-dom';
import { LocationMask, Map } from './components';
import { ROUTES } from './constants';

export const Root = () => (
  <Switch>
    <Route path={ROUTES.ROOT} component={LocationMask} />
  </Switch>
);
