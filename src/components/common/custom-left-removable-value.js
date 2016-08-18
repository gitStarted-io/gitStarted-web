import React from 'react';

export default class CustomLeftRemovableValue extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return <li key={`${this.props.value}_framework`} onClick={(()=>{
            this.props.fn(this.props.value);
        })}>{this.props.text}</li>
    }
}