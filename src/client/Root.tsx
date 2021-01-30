import { Route, Switch } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { TestComponent } from './components';

export const Root = () => (
  <Switch>
    <Route path={ROUTES.ROOT} component={TestComponent} />
  </Switch>
);
