import { Route, Switch } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';

export function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
    </Switch>
  );
}
