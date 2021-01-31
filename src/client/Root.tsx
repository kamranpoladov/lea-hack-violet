import { Route, Switch } from 'react-router-dom';
import { LocationMask } from './components';
import { HostsList } from './components/HostsList';
import { ROUTES } from './constants';

export const Root = () => (
  <Switch>
    <Route exact path={ROUTES.ROOT} component={LocationMask} />
    <Route exact path={ROUTES.HOSTS} component={HostsList} />
  </Switch>
);
