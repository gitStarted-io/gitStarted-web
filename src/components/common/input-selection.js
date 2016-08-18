
import React from "react";

export default class InputSelection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div key={`custom-bm-${this.props.class}`}>
            <span>{this.props.text}</span>
            <input id={this.props.class}
                   value={this.props.list[this.props.class]}
                   type="checkbox"
                   onChange={this.props.fn} checked={this.props.selected}/>
        </div>
    }
}
