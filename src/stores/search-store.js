/**
 * Created by Jake Alsemgeest on 2016-05-14.
 */

import BaseStore from './base-store'
import AppDispatcher from '../dispatcher/dispatcher'
import SearchEnums from '../enums/search-enums'

import FakeResults from '../fake/search-results'
import TemplateModel from '../models/template-model'

const _store = {
    searchTerm:'',
    results:FakeResults.map((result) => {
        return new TemplateModel(result);
    })
}

class SearchStoreClass extends BaseStore {
    getStore() {
        return _store;
    }

    getSearchTerm() {
        return _store.searchTerm;
    }
    
    getFakeResponse() {
        return _store.results;
    }
}

const SearchStore = new SearchStoreClass();

function setNewTerm(term) {
    _store.searchTerm = term;
}

AppDispatcher.register((payload) => {
    var action = payload.action;
    var data = payload.payload;

    switch (action) {
        case SearchEnums.NEW_SEARCH_TERM:
            setNewTerm(data.term);
            SearchStore.emitChange();
            break;
    }
});

export default SearchStore;