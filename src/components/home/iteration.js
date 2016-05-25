import React from 'react';

export default class List extends React.Component {
	constructor(props) {
		super(props);

		this.getValue = this.getValue.bind(this);
	}

	getValue() {
		return this.props.ex;
	}

	render() {
		return <li> {this.getValue()} </li>
	}
}