require('bootstrap-webpack');
require('font-awesome-webpack');
require('./style.scss');

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, Link, browserHistory, IndexRedirect} from 'react-router'
import App from './app'
import Login from './authentication/login'
import Dashboard from './dashboard/dashboard'
import Home from './home/home'
import Template from './template/template'

function loadSettings() {
	// console.log("Awesome");
}

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App} onEnter={loadSettings}>
			<Route path="" component={Dashboard}>
				<IndexRoute component={Home}/>
				<Route path="template/:templateName" component={Template}/>
			</Route>
			<Route path="login" component={Login}/>
		</Route>
	</Router>, 
	document.getElementById('app'));