/**
 * Created by Jake Alsemgeest on 2016-05-14.
 */

import React from 'react'
import {browserHistory, Link} from 'react-router'

export default class TemplateEntry extends React.Component {
    constructor(props) {
        super(props);

        this.getAuthor = this.getAuthor.bind(this);
        this.goToTemplate = this.goToTemplate.bind(this);
        this.getTag = this.getTag.bind(this);
    }

    getAuthor(e) {
        e.preventDefault();
        console.log("Get author");
        browserHistory.push("/user/"+this.props.entry.getAuthor());
    }

    goToTemplate(e) {
        e.preventDefault();
        browserHistory.push("/template/"+this.props.entry.getTemplateName());
    }

    getTag(e) {
        e.preventDefault();
        browserHistory.push("/tag/");
    }

    render() {
        var self = this;
        return <div className="template_entry">
            <p className="title"><a onClick={this.goToTemplate} href={"/template/"+this.props.entry.getTemplateName()}>{this.props.entry.getTemplateName()}</a></p>
            <a href={"/user/"+this.props.entry.getAuthor()} onClick={this.getAuthor} className="author">{this.props.entry.getAuthor()}</a>
            <p className="description">{this.props.entry.getDescription()}</p>
            <p className="version">v{this.props.entry.getVersion()}</p>
            <ul>
                {
                    this.props.entry.getTags().map((tag) => {
                        return <li key={this.props.entry.getTemplateId()+tag}><a href={"/tag/"+tag} onClick={self.getTag}>{tag}</a></li>
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