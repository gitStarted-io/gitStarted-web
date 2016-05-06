import React from 'react';
import {Link, browserHistory} from 'react-router'
// import NavActions from '../../actions/nav-actions'

class MenuItem extends React.Component {
	constructor(props) {
		super(props);

		this.toggleMenu = this.toggleMenu.bind(this);
	}

	goTo(path, e) {
		e.preventDefault();
		e.stopPropagation();

		if (path.indexOf('http') > -1){
	      window.open(path);
	      return;
	    }

	    browserHistory.push(path);
	}

	toggleMenu(pathName, e) {
	    e.preventDefault();
	    e.stopPropagation();

	    // NavActions.menuClick(pathName);
	}

	render() {
	    // if (this.props.route) {
	    //   return <li onClick={this.goTo.bind(null, this.props.route)}>
	    //     <div>{this.props.display}</div>
	    //   </li>
	    // }

	   	if (this.props.subItems.length > 0) {
      		return (
		        <li onClick={this.toggleMenu.bind(null, this.props.display)}
		            className={this.props.active ? 'active': null}>
		          <div>{this.props.display}</div>
		          <ul className="list-unstyled">
		            {
		              this.props.subItems.map(function (item, i) {
		                return <MenuItem display={item.display}
		                                 route={item.route}
		                                 subItems={item.children}
		                                 key={i}/>
		              })
		            }
		          </ul>
		        </li>
		    );
      	}
      	return null;
    }
}

MenuItem.defaultProps = {
	display: '',
  	route: '',
  	subItems: [],
  	active: false
}

export default MenuItem;