/**
 * Created by Durzo on 5/25/2016.
 */

import React from "react";
import CustomTemplate from "../../models/custom-template";
import CustomStore from "../../stores/custom-template-store";
import BuildManagerConstants from "../../constants/build-managers";
import FrameworkConstants from "../../constants/frameworks";
import CustomActions from "../../actions/custom-actions";
import CustomLeftRemovableValue from "../common/custom-left-removable-value";
import CustomDropdown from "../common/toggle-dropdown";

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

    removeFramework(key) {
        CustomActions.includesFramework(false, key);
    }

    removeBuildManager(key) {
        CustomActions.includesBuildManager(false, key);
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
                <CustomDropdown title="Frameworks">
                    <ul>
                        {
                            (() => {
                                let keys = this.state.template.frameworkKeys;
                                let valid = [];
                                for (var i = 0; i < keys.length; i++) {
                                    if (this.state.template.frameworks[keys[i]]) {
                                        valid.push(<CustomLeftRemovableValue
                                            text={FrameworkConstants[keys[i]]}
                                            key={keys[i]}
                                            value={keys[i]}
                                            fn={this.removeFramework} />);
                                    }
                                }
                                return valid;
                            })()
                        }
                    </ul>
                </CustomDropdown>

                <CustomDropdown title="Build Managers">
                    <ul>
                        {
                            (() => {
                                let keys = this.state.template.buildManagerKeys;
                                let valid = [];
                                for (var i = 0; i < keys.length; i++) {
                                    if (this.state.template.buildManagers[keys[i]]) {
                                        valid.push(<CustomLeftRemovableValue
                                                        text={BuildManagerConstants[keys[i]]}
                                                        key={keys[i]}
                                                        value={keys[i]}
                                                        fn={this.removeBuildManager} />);

                                    }
                                }
                                return valid;
                            })()
                        }
                    </ul>
                </CustomDropdown>
                <CustomDropdown title="Node Modules">
                    <ul>
                        {
                            this.state.template.modules.map((module) => {
                                return <li key={module.getVersion() + "_" + module.getModuleName()}>{module.getReactComponent({isSelected:true})}</li>;
                            })
                        }
                    </ul>
                </CustomDropdown>

            </div>
    }
}