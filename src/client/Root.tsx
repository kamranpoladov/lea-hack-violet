import { Route, Switch } from 'react-router-dom';
import { MainPage } from './components';
import { ROUTES } from './constants';

export const Root = () => (
  <Switch>
    <Route exact path={ROUTES.ROOT} component={MainPage} />
  </Switch>
);
