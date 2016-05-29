/**
 * Created by Durzo on 5/25/2016.
 */

import React from "react";
import CustomActions from "../../actions/custom-actions"

export default class CustomModule extends React.Component {
    constructor(props) {
        super(props);

        this.addModule = this.addModule.bind(this);
    }

    addModule() {
        if (!this.props.isSelected) {
            CustomActions.selectedModule(this.props.module);
        } else {
            CustomActions.removeModule(this.props.module);
        }
    }

    render() {
        if (this.props.isSelected) {
            return <a onClick={this.addModule} className="module_container"><p className="module_name">{this.props.module.getModuleName()}</p></a>;
        }
        return <a onClick={this.addModule} className="module_container">
            <div className="info_container">
                <p className="module_name">{this.props.module.getModuleName()}</p>
                <p className="module_description">{this.props.module.getDescription()}</p>
            </div>
        </a>
    }
}