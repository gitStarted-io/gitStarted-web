/**
 * Created by Jake Alsemgeest on 2016-05-14.
 */

import SearchEnums from '../enums/search-enums'
import AppDispatcher from '../dispatcher/dispatcher'

export default class SearchActions {
    static setNewSearchTerm(term) {
        if (term) {
            AppDispatcher.send(SearchEnums.NEW_SEARCH_TERM, {
                term:term
            });
        }
    }
}