import React from 'react';
import {browserHistory} from 'react-router'

export default class App extends React.Component {

  goTo(path) {
  	browserHistory.push(path);
  }

  render() {
    return <div style={{height: '100%'}}>{this.props.children}</div>
  }
}