/**
 * Created by Jake Alsemgeest on 2016-05-15.
 */

import BaseStore from './base-store'
import TemplateEnums from '../enums/template-enums'
import TemplateModel from '../models/template-model'
import AppDispatcher from '../dispatcher/dispatcher'

const _store = {
    currentTemplate:new TemplateModel({}),
    term:''
}

class TemplateStoreClass extends BaseStore {
    getStore() {
        return _store;
    }

    getCurrentTemplate() {
        return _store.currentTemplate;
    }

    getTemplateTerm() {
        return _store.term;
    }
}

const TemplateStore = new TemplateStoreClass();

function setCurrentTemplate(template = {}) {
    _store.currentTemplate = template;
}

function setTerm(term = "") {
    _store.term = term;
}

AppDispatcher.register((payload) => {
    var action = payload.action;
    var data = payload.payload;

    switch (action) {
        case TemplateEnums.GET_TEMPLATE_SUCCESS:
            setCurrentTemplate(data.template);
            setTerm(data.templateName);
            TemplateStore.emitChange();
            break;
    }
});

export default TemplateStore;