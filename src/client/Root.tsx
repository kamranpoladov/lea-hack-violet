import { Route, Switch } from 'react-router-dom';
import { MapComponent, HostsList } from './components';
import { HostProfileIcon } from './components/HostsList/components';
import { ROUTES } from './constants/routes';

export const Root = () => (
  <Switch>
    <Route exact path={ROUTES.ROOT} component={() => <HostProfileIcon />} />
    <Route exact path={ROUTES.HOSTS} component={HostsList} />
  </Switch>
);
