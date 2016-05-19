/**
 * Created by Jake Alsemgeest on 2016-05-15.
 */

import React from 'react'
import UserActions from '../../actions/user-actions'
import UserStore from '../../stores/user-store'
import TemplateEntry from '../template/template-entry'

function getState() {
    return {
        user:UserStore.getUser()
    }
}

export default class User extends React.Component {
    constructor(props) {
        super(props)

        this._onChange = this._onChange.bind(this);
        
        this.state = getState();
    }
    
    componentDidMount() {
        UserStore.addChangeListener(this._onChange);

        UserActions.getUser(this.props.params.username);
    }

    componentWillUnmount() {
        UserStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(getState());
    }

    render() {
        return <div className="user_container">
            <div className="user_info">
                <img src={this.state.user.getThumbnail()} />
                <div className="user_text">
                    <p className="username">{this.state.user.getUsername()}</p>
                    <p className="join_date">{this.state.user.getJoinDateToString()}</p>
                </div>
            </div>
            <div className="user_templates">
                <ul>
                    {
                        this.state.user.getTemplates().map((template) => {
                           return <li key={template.getTemplateId()}><TemplateEntry entry={template}/></li>
                        })
                    }
                </ul>
            </div>
            </div>
    }
}