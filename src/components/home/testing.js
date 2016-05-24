import React from 'react';

class Test extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return <div className="testingDiv">
					<h1> TEST </h1>
					<a> {"this.props.results(0)"} </a>
				</div>

	}


}

export default Test;