import React from 'react';
import {Link} from 'react-router'
import HttpService from '../../services/http-service'
// import RenderReadMe from 'render-readme'
import TemplateActions from '../../actions/template-actions'
import TemplateStore from '../../stores/template-store'
import CommentActions from '../../actions/comment-actions'
import CommentStore from '../../stores/comment-store'
import Comments from '../comments/comments'

function getState() {
	return {
        template:TemplateStore.getCurrentTemplate(),
        term:TemplateStore.getTemplateTerm(),
        comments:CommentStore.getComments()
        // id:12345,
        // title:'gitStarted-web',
        // author:'Jalsemgeest',
        // description:'awesome',
        // tags:['awesome', 'crazy', 'perfect'],
        // version:'1.0.1',
        // github:'https://github.com/gitStarted-io/gitStarted',
        // collaborators:[1,2,3]
	}
}

export default class Template extends React.Component {

    constructor(props) {
        super(props);

        console.log("DASHBOARD CONSTRUCTOR");
        this.state = getState();
        this.state.tags = this.state.tags || [];
        this.state.term = this.state.term || "";

        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        TemplateStore.addChangeListener(this._onChange);
        CommentStore.addChangeListener(this._onChange);
  	    this.setState(getState());
        TemplateActions.getTemplate(this.props.params.templateName, (templateId) => {
            CommentActions.getCommentsForTemplate(templateId);
        });

        // var promise = HttpService.get("https://raw.githubusercontent.com/substack/node-browserify/master/readme.markdown");
        //
        // promise.then((response) => {
        //     // self.setState({description:response});
        //     HttpService.post("https://api.github.com/markdown",
        //         {
        //             text:response.data,
        //             mode:'markdown'
        //         })
        //         .then((response) => {
        //             self.setState({description:response.data, isMarkdown: true});
        //             // console.log(response);
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //         });
        //     // console.log(response.data);
        // })
        // .catch((err) => {
        //     console.log(err);
        // });
    }

    componentWillUnmount() {
        TemplateStore.removeChangeListener(this._onChange);
        CommentStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(getState());
    }

    render() {

        return <div className="template_page">
                <div className="template_container">
                    <div className="template_left">
                        <p className="template_title">{this.state.template.getTemplateName()}</p>
                        <div className="template_readme" dangerouslySetInnerHTML={{__html:this.state.template.getDescription()}}/>
                    </div>
                    <div className="template_right">
                        <p className="template_author"><a href={"/user/"+this.state.template.getAuthor()}>{this.state.template.getAuthor()}</a></p>
                        <p className="template_version">v{this.state.template.getVersion()}</p>
                        {
                            ((self) => {
                                if (self.state.template.getTags().length > 0) {
                                    var tags = self.state.template.getTags().map((tag) => {
                                       return <li key={tag}><a href={"/tag/"+tag}>{tag}</a></li>;
                                    });
                                    return  <ul className="template_tags">
                                            {tags}
                                            </ul>
                                }
                            })(this)
                        }
                    </div>
                </div>
                <Comments comments={this.state.comments} />
            </div>

    }
}