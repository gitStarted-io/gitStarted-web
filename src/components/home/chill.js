import React from 'react';


export default class Chill extends React.Component {
	constructor(props) {
		super(props);

		this.chillTest = this.chillTest.bind(this);
	}

	chillTest() {
		return this.props.in;
	}

	render() {
		return <div id="YUP"> 
					<h1>She's workin</h1>
					<h1> {this.props.in} </h1>
				</div>
	}
}