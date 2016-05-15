import React from 'react';
import ReactDOM from 'react-dom'
// import MenuItem from './menu-item'
import {browserHistory, Link} from 'react-router'
import SearchActions from '../../actions/search-actions'

function getState() {
    return {
        name: 'Jake',
        search:''
    }
}

const KEYS = {
    ENTER_KEY:13
}

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.focusSearch = this.focusSearch.bind(this);
        this.searchChange = this.searchChange.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
        this._onChange = this._onChange.bind(this);

        this.state = getState();

    }

    focusSearch() {
        ReactDOM.findDOMNode(this.refs.template_search_field).focus();
    }

    searchChange(e) {
        e.preventDefault();
        this.setState({search:e.target.value});
    }

    submitSearch(e) {
        if (e.which === KEYS.ENTER_KEY) {
            e.preventDefault();
            var term = encodeURIComponent(this.state.search);
            SearchActions.setNewSearchTerm(term);
            browserHistory.push("/search/" + term);
        }
    }

    _onChange() {
        this.setState(getState());
    }

    render() {
        return  <div className="container">
                    <nav className="top_nav">
                        <div className="search_bar_container">
                            <a className="search_icon" onClick={this.focusSearch}></a>
                            <input value={this.state.search} ref="template_search_field" className="search_bar" onChange={this.searchChange} onKeyPress={this.submitSearch} type = "text"/>
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