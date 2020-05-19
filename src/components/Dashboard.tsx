import * as React from 'react';
import { Notepad } from './Notepad';

export class Dashboard extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Notepad />
    );
  }
}

