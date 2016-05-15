/**
 * Created by Jake Alsemgeest on 2016-05-14.
 */

import React from 'react';
import SearchStore from '../../stores/search-store'
import TemplateEntry from '../template/template-entry'

function getState() {
    return {
        results:SearchStore.getFakeResponse(),
        term:SearchStore.getSearchTerm()
    }
}

export default class Search extends React.Component {

    constructor(props) {
        super(props);

        this._onChange = this._onChange.bind(this);

        this.state = getState();
    }
    
    componentDidMount() {
        SearchStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        SearchStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(getState());
    }

    render() {
        return  <div className="home_container">
            <ul>
                {
                    this.state.results.map((result) => {
                        return <li key={result.getTemplateName() + "_" + result.getVersion() + (Math.random() * 10000)}><TemplateEntry entry={result} /></li>;
                    })
                }
            </ul>
        </div>
    }
}