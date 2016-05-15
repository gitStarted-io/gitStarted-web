/**
 * Created by Jake Alsemgeest on 2016-05-14.
 */

import React from 'react'

export default class TemplateEntry extends React.Component {
    constructor(props) {
        super(props);
    }

    getAuthor() {
        console.log("Get author");
    }

    getTag() {
        
    }

    render() {
        var self = this;
        return <div className="template_entry">
            <p className="title">{this.props.entry.getTemplateName()}</p>
            <a onClick={this.getAuthor} className="author">{this.props.entry.getAuthor()}</a>
            <p className="description">{this.props.entry.getDescription()}</p>
            <p className="version">v{this.props.entry.getVersion()}</p>
            <ul>
                {
                    this.props.entry.getTags().map((tag) => {
                        return <li><a onClick={self.getTag}>{tag}</a></li>
                    })
                }
            </ul>
            <div className="votes">
                <div className="up">
                    {this.props.entry.getUpvotes()}
                </div>
                <div className="down">
                    {this.props.entry.getDownvotes()}
                </div>
            </div>
        </div>
    }
}

TemplateEntry.defaultProps = {
    entry: {
        templateName:'',
        description:'',
        version:'',
        author:'',
        upvotes:0,
        downvotes:0,
        tags:[]
    }
}