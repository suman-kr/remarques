import * as React from 'react';
import { Dashboard } from './Dashboard';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { generateURL } from '../helpers';
import { Notepad } from './Notepad';

export class App extends React.PureComponent {
  url = generateURL();
  componentDidMount() {
    localStorage.setItem('url_path', window.location.pathname);
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Dashboard url={this.url} />
          </Route>
          <Route exact path={`/:${this.url}`} component={Notepad} />
        </Switch>
      </BrowserRouter>
    );
  }
}
