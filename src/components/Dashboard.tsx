import * as React from 'react';
import { Redirect } from 'react-router-dom';
export class Dashboard extends React.PureComponent<Props, {}> {
  render() {
    return <>
      <Redirect to={this.props.url} />
    </>
  }
}


interface Props{
  url: string;
}