import React from 'react';
import {Link} from 'react-router'
import HttpService from '../../services/http-service'
// import RenderReadMe from 'render-readme'

function getState() {
	return {
        id:12345,
		title:'gitStarted-web',
        author:'Jalsemgeest',
        description:'awesome',
        tags:['awesome', 'crazy', 'perfect'],
        version:'1.0.1',
        github:'https://github.com/gitStarted-io/gitStarted',
        collaborators:[1,2,3]
	}
}

export default class Template extends React.Component {

    constructor(props) {
        super(props);

        console.log("DASHBOARD CONSTRUCTOR");
        this.state = {
            version:'',
            tags:[]
        }

        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
  	    this.setState(getState());
        var self = this;
        var promise = HttpService.get("https://raw.githubusercontent.com/substack/node-browserify/master/readme.markdown");

        promise.then((response) => {
            // self.setState({description:response});
            HttpService.post("https://api.github.com/markdown",
                {
                    text:response.data,
                    mode:'markdown'
                })
                .then((response) => {
                    self.setState({description:response.data, isMarkdown: true});
                    // console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                });
            // console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    _onChange() {
        this.setState(getState());
    }

    render() {

        return  <div className="template_container">
                    <div className="template_left">
                        {
                            ((self) => {
                                if (!self.state.description || !self.state.isMarkdown) {
                                    return <p className="template_title">{self.props.params.templateName}</p>;
                                }
                                return <div className="template_readme" dangerouslySetInnerHTML={{__html:self.state.description}}/>
                            })(this)
                        }
                    </div>
                    <div className="template_right">
                        <p className="template_author"><a href={"/user/"+this.state.author}>{this.state.author}</a></p>
                        <p className="template_version">v{this.state.version}</p>
                        {
                            ((self) => {
                                if (self.state.tags.length > 0) {
                                    var tags = self.state.tags.map((tag) => {
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

    }
}