import React from 'react';
import {Link} from 'react-router'
import TopHome from './top-home'
import ThreeHome from './three-home'
import AboutHome from './about-home'
import Test from './testing'

var tester = {fname:"colin",lname:"macleod",full: };

function GetName(a) {
    return a.lname;
}

class Home extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return  <div className="home_container">
              {/*<TopHome />
              <ThreeHome />
              <AboutHome />*/}
            <Test /> 
            <h1>{GetName(tester)} !</h1>
            </div>
  }
}



export default Home;