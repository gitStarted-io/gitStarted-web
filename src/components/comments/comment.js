/**
 * Created by Jake Alsemgeest on 2016-05-15.
 */

import React from 'react'
import {browserHistory, Link} from 'react-router'

export default class Comment extends React.Component {
    constructor(props) {
        super(props)

        this.getUser = this.getUser.bind(this);
    }

    getUser(e) {
        e.preventDefault();
        browserHistory.push("/user/" + this.props.comment.getUsername());
    }

    render() {
        return <div className="comment_wrapper">
            <p className="comment">{this.props.comment.getComment()}</p>
            <a className="username" href={"/user/"+this.props.comment.getUsername()} onClick={this.getUser}>{this.props.comment.getUsername()}</a>
            <p className="time">{this.props.comment.getTimeAsString()}</p>
        </div>
    }
}