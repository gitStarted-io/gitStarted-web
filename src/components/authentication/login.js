import React from 'react';
import {Link} from 'react-router'

function getState() {
	return {
		name:'Jake'
	}
}

class Login extends React.Component {

  constructor(props) {
    super(props);

    this._onChange = this._onChange.bind(this);

    this.state = getState();
  }

  componentDidMount() {
    // NavStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    // NavStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getState());
  }

  render() {
    return <h1>Login</h1>
  }
}

export default Login;