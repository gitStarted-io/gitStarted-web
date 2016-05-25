import React from 'react';
import {browserHistory, Link} from 'react-router'
import List from './iteration'

export default class Test extends React.Component {

	constructor(props) {
		super(props);

		this.getName = this.getName.bind(this);
		this.urlChange=this.urlChange.bind(this);
	}

	getName() {
		return this.props.a.fname+' '+this.props.a.lname;
	}

	urlChange(e) {
		e.preventDefault();
		browserHistory.push("/urltest")
	}


	render() {
		return <div className="testingDiv">
					<h1> TEST </h1>
					<a onClick={this.urlChange}> {this.getName()} also url test </a>
					<ul> 
						{	
							this.props.a.array.map((ele)=>{
								return <List ex={ele} key={Math.random()*10} />
							})	
						}				
					</ul>
				</div>
	}


}
