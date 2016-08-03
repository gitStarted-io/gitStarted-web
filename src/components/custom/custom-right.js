/**
 * Created by Durzo on 5/25/2016.
 */

import React from "react";
import CustomActions from "../../actions/custom-actions";
import CustomStore from "../../stores/custom-template-store"


function getState() {
    return {
        template: CustomStore.getTemplate(),
        searchResults: CustomStore.getSearchResults()
    }
}

const KEYS = {
    ENTER_KEY:13
}

export default class CustomRight extends React.Component {
    constructor(props) {
        super(props);

        this.state = getState();
        this.state.search = "";

        this._onChange = this._onChange.bind(this);
        this.moduleSearch = this.moduleSearch.bind(this);
        this.moduleSearchPress = this.moduleSearchPress.bind(this);
        this.collaboratorsChange = this.collaboratorsChange.bind(this);
        this.collaboratorsAdd = this.collaboratorsAdd.bind(this);
        this.render = this.render.bind(this);
    }

    componentDidMount() {
        CustomStore.addChangeListener(this._onChange);

        if (this.state.searchResults.length === 0) {
            CustomActions.getTopModules();
        }
    }

    componentWillUnmount() {
        CustomStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(getState());
    }

    templateNameChange(e) {
        CustomActions.setTemplateName(e.target.value);
    }

    descriptionChange(e) {
        CustomActions.setDescription(e.target.value);
    }

    selectedModule(module) {
        CustomActions.selectedModule(module);
    }

    collaboratorsChange(e) {
        this.setState({collaborator: e.target.value});
    }

    collaboratorsAdd(e) {
        if (e.which === 13) {
            e.preventDefault();
            CustomActions.addCollaborator(this.state.collaborator);
            this.setState({collaborator:''});
        }
    }

    moduleSearch(e) {
        e.preventDefault();
        this.setState({search:e.target.value});
    }

    moduleSearchPress(e) {
        if (e.which === KEYS.ENTER_KEY) {
            e.preventDefault();
            CustomActions.searchNPM(this.state.search);
        }
    }

    render() {
        var self = this;
        return <div className="right">
                    <div className="template_title">
                        <input value={this.state.template.templateName} onChange={this.templateNameChange} />
                    </div>
                    <div className="template_description">
                        <textarea value={this.state.template.description} onChange={this.descriptionChange} />
                    </div>
                    <div className="template_collaborators">
                        <input value={this.state.collaborator} onChange={this.collaboratorsChange} onKeyUp={this.collaboratorsAdd} />
                    </div>
                    <div className="module_search">
                        <input value={this.state.search} type="text" onChange={this.moduleSearch} onKeyPress={this.moduleSearchPress} placeholder="Module Search"/>
                    </div>
                    <div  className="modules">
                        <ul className="module_list">
                            {
                                this.state.searchResults.map((module) => {
                                    return <li key={module.getVersion()+"__" + module.getModuleName()}>{module.getReactComponent({isSelected:false})}</li>;
                                })
                            }
                        </ul>
                    </div>
               </div>
    }
}