import React from 'react';
import {Link} from 'react-router'
import TopHome from './top-home'
import ThreeHome from './three-home'
import AboutHome from './about-home'
import Test from './testing'

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.GetFName = this.GetFName.bind(this);
    this.GetLName = this.GetLName.bind(this);
    this.GetName = this.GetName.bind(this);

  }

  GetFName() {
    return this.props.tester.fname;
  }
  GetLName() {
    return this.props.tester.lname;
  }
  GetName() {
    return this.props.tester.fname+' '+this.props.tester.lname;
  }

  render() {
    return  <div className="home_container">
              {/*<TopHome />
              <ThreeHome />
              <AboutHome />*/}
            <Test a={this.props.tester} /> 
            <h1>{this.GetName()}!</h1>
            </div>
  }
}

Home.defaultProps = {
    tester: {
      fname:"colin",
      lname:"macleod",
      full:"Colin MacLeod",
      array:["1","2","3","4","5","6","7","8","9","10","11","2","3","4","5","6","7","8","9","10","11","2","3","4","5","6","7","8","9","10","11","2","3","4","5","6","7","8","9","10","11"]
    }
}
