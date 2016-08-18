import React from 'react';

export default class ToggleDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            droppedDown:false
        };
    }

    toggle() {
        this.setState({droppedDown:!this.state.droppedDown});
    }

    render() {
        if (!this.state.droppedDown) {
            return <div className="toggle-dropdown">
                <h3 onClick={this.toggle}>{this.props.title}</h3>
            </div>
        }

        return <div className="toggle-dropdown down">
            <h3 onClick={this.toggle}>{this.props.title}</h3>
            {this.props.children}
        </div>
    }
}