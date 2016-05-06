import React from 'react';
import ReactDOM from 'react-dom'
// import MenuItem from './menu-item'
import {Link} from 'react-router'

function getState() {
    return {
        name: 'Jake'
    }
}

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        console.log("DASHBOARD CONSTRUCTOR");

        this.focusSearch = this.focusSearch.bind(this);
        this._onChange = this._onChange.bind(this);

    }

    focusSearch() {
        ReactDOM.findDOMNode(this.refs.template_search_field).focus();
    }

    _onChange() {
        this.setState(getState());
    }

    render() {
        return  <div className="container">
                    <nav className="top_nav">
                        <div className="search_bar_container">
                            <a className="search_icon" onClick={this.focusSearch}></a>
                            <input ref="template_search_field" className="search_bar" type = "text"/>
                        </div>
                        <div className="nav_title">gitStarted</div>
                    </nav>
                    <div className="content_container">
                        {this.props.children}
                    </div>
                </div>
    }
}

export default Dashboard;