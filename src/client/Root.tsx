import { Route, Switch } from 'react-router-dom';
import { MapComponent } from './components';
import { ROUTES } from './constants';

export const Root = () => (
  <Switch>
    <Route path={ROUTES.ROOT} component={MapComponent} />
  </Switch>
);
