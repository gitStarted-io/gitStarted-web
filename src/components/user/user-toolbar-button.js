/**
 * Created by Jake Alsemgeest on 2016-05-16.
 */

import React from 'react'
import {browserHistory, Link} from 'react-router'

export default class UserToolbarButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show:false
        };

        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    login(e) {
        e.preventDefault();
        browserHistory.push('/login');
    }

    toggleVisibility() {
        this.setState({show:!this.state.show});
    }

    goToMyProfile(e) {
        e.preventDefault();
        browserHistory.push('/profile');
    }

    logout(e) {
        e.preventDefault();
        // browserHistory.push('');
    }

    createTemplate() {
        browserHistory.push('/create');
    }

    render() {
        if (!this.props.user.getId()) {
            return <a className="login_button" onClick={this.login} href="/login">Login</a>
        }
        var dropdown = "dropdown " + (this.state.show ? " visible" : "");

        return <div onClick={this.toggleVisibility} className="user_button">
                    <div className="create_template" onClick={this.createTemplate}>Create</div>
                    <p>{this.props.user.getUsername()}</p>
                    <img src={this.props.user.getThumbnail()}/>
                    <div className={dropdown}>
                        <ul>
                            <li><a onClick={this.goToMyProfile}>My Profile</a></li>
                            <li><a onClick={this.logout}>Logout</a></li>
                        </ul>
                    </div>
            </div>
    }
}