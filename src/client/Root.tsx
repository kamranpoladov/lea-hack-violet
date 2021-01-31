import { Route, Switch } from 'react-router-dom';
import { MapComponent, HostsList } from './components';
import { ROUTES } from './constants/routes';

export const Root = () => (
  <Switch>
    <Route exact path={ROUTES.ROOT} component={() => <>Map</>} />
    <Route exact path={ROUTES.HOSTS} component={HostsList} />
  </Switch>
);
