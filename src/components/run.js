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
import Search from './search/search'
import User from './user/user'
import Create from './create/create'
import Custom from './custom/custom'

function loadSettings() {
	// console.log("Awesome");
}

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App} onEnter={loadSettings}>
			<Route path="" component={Dashboard}>
				<IndexRoute component={Home}/>
				<Route path="template/:templateName" component={Template}/>
				<Route path="create" component={Create}/>
				<Route path="search/:term" component={Search} />
				<Route path="user/:username" component={User} />
				<Route path="login" component={Login} />
				<Route path="custom" component={Custom} />
			</Route>
		</Route>
	</Router>, 
	document.getElementById('app'));