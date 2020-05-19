import * as React from 'react';
import { Dashboard } from './Dashboard';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
export class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
