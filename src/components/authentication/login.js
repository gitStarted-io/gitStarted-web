import React from 'react';
import {browserHistory, Link} from 'react-router'
import UserActions from '../../actions/user-actions'
import UserStore from '../../stores/user-store'

function getState() {
  return {
    user:UserStore.getMe(),
    username:'',
    password:''
  }
}

class Login extends React.Component {

  constructor(props) {
      super(props);
      this.setUsername = this.setUsername.bind(this);
      this.setPassword = this.setPassword.bind(this);
      this.attemptLogin = this.attemptLogin.bind(this);
      this._onChange = this._onChange.bind(this);
      this.state = getState();
  }

  componentDidMount() {
      UserStore.addChangeListener(this._onChange);
  }
  
  componentWillUnmount() {
      UserStore.removeChangeListener(this._onChange);
  }
  
  attemptLogin(e) {
      e.preventDefault();
      UserActions.attemptLogin(this.state.username, this.state.password);
  }

  setUsername(e) {
      this.setState({username:e.target.value});
  }

  setPassword(e) {
      this.setState({password:e.target.value});
  }

    goToRegister() {
        console.log("Go to register.");
    }
  
  _onChange() {
     this.setState(getState(), () => {
       if (this.state.user.getId() > 0) {
         browserHistory.push('/');
       }
     });
  }

  render() {
    return(
    <div className = "login_container">
        <h1 className = "loginHeader">Login</h1>
      <form onSubmit={this.attemptLogin}>
          Username<br/>
          <input className = "inputField" name="username" value={this.state.username} onChange={this.setUsername} type="text"/><br/>
          Password<br/>
          <input className = "inputField" name="password" value={this.state.password} onChange={this.setPassword} type="password"/>
          <br/>
          <button className = "loginButton" type="submit">Login</button>
        </form>
        <div onClick={this.goToRegister} className="registerButton">Register</div>
    </div>
          );
  }
}

export default Login;