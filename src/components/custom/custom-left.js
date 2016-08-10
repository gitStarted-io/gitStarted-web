/**
 * Created by Durzo on 5/25/2016.
 */

import React from "react";
import CustomTemplate from "../../models/custom-template";
import CustomStore from "../../stores/custom-template-store";

function getState() {
    return {
        template:CustomStore.getTemplate()
    };
}

export default class CustomLeft extends React.Component {
    constructor(props) {
        super(props);

        this.state = getState();

        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        CustomStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        CustomStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(getState());
    }

    render() {
        return <div className="left">
                <h1>{this.state.template.templateName}</h1>
                <p>{this.state.template.description}</p>
                <p>Collaborators:</p>
                <ul>
                    {
                        this.state.template.collaborators.map((user) => {
                            return <li>{user}</li>;
                        })
                    }
                </ul>
                <p>Private Repo: {this.state.template.isPrivate ? "True" : "False"}</p>
                <ul>
                    {
                        (() => {
                            let keys = Object.keys(this.state.template.frameworks);
                            let valid = [];
                            for (var i = 0; i < keys.length; i++) {
                                if (this.state.template.frameworks[keys[i]]) {
                                    valid.push(<li key={`${keys[i]}_framework`}>{keys[i]}</li>);
                                }
                            }
                            return valid;
                        })()
                    }
                </ul>
                <ul>
                    {
                        (() => {
                            let keys = Object.keys(this.state.template.buildManagers);
                            let valid = [];
                            for (var i = 0; i < keys.length; i++) {
                                if (this.state.template.buildManagers[keys[i]]) {
                                    valid.push(<li key={`${keys[i]}_framework`}>{keys[i]}</li>);
                                }
                            }
                            return valid;
                        })()
                    }
                </ul>
                <ul>
                    {
                        this.state.template.modules.map((module) => {
                            return <li key={module.getVersion() + "_" + module.getModuleName()}>{module.getReactComponent({isSelected:true})}</li>;
                        })
                    }
                </ul>

            </div>
    }
}