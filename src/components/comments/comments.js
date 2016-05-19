/**
 * Created by Jake Alsemgeest on 2016-05-15.
 */

import React from 'react'
import Comment from './comment'

export default class Comments extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return <div className="comments_container">
            <ul>
                {
                    this.props.comments.map((comment) => {
                        return <li key={comment.getId()}><Comment comment={comment}/></li>;
                    })
                }
            </ul>
        </div>
    }
}