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

export default class CustomRight extends React.Component {
    constructor(props) {
        super(props);

        this.state = getState();

        this._onChange = this._onChange.bind(this);
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

    render() {
        var self = this;
        return <div className="right">
                    <h1>Right</h1>
                    <input value={this.state.template.getTemplateName()} onChange={this.templateNameChange} />
                    <textarea onChange={this.descriptionChange} />
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