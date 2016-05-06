import React from 'react';
import {Link} from 'react-router'
import TopHome from './top-home'
import ThreeHome from './three-home'
import AboutHome from './about-home'


class Home extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return  <div className="home_container">
              <TopHome />
              <ThreeHome />
              <AboutHome />
            </div>
  }
}

export default Home;