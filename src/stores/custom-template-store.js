/**
 * Created by Durzo on 5/25/2016.
 */

import AppDispatcher from "../dispatcher/dispatcher";
import CustomTemplateEnums from "../enums/custom-enums";
import BaseStore from "./base-store";
import CustomModel from "../models/custom-template"

const _store = {
    template:CustomModel.getDefaultTemplate(),
    searchResults:[]
};

class CustomTemplateStoreClass extends BaseStore {
    getStore() {
        return _store;
    }

    getTemplate() {
        return _store.template;
    }

    getSearchResults() {
        return _store.searchResults;
    }
}

function updateTemplateName(name) {
    _store.template.setName(name);
}

function updateDescription(description) {
    if (!description) return;
    _store.template.setDescription(description);
}

function updateSearchResults(results) {
    if (!results) return;
    _store.searchResults = results;
}

function addModuleToTemplate(module) {
    if (!module) return;
    _store.template.addModule(module);
}

function removeModuleForTemplate(module) {
    if (!module) return;
    _store.template.removeModule(module);
}

const CustomTemplateStore = new CustomTemplateStoreClass();

AppDispatcher.register((payload) => {
    let action = payload.action;
    let data = payload.payload;

    switch (action) {
        case CustomTemplateEnums.CUSTOM_TEMPLATE_NAME_CHANGED:
            updateTemplateName(data.templateName);
            CustomTemplateStore.emitChange();
            break;
        case CustomTemplateEnums.CUSTOM_TEMPLATE_DESCRIPTION_CHANGED:
            updateDescription(data.description);
            CustomTemplateStore.emitChange();
            break;
        case CustomTemplateEnums.CUSTOM_TEMPLATE_TOP_MODULES:
            updateSearchResults(data.results);
            CustomTemplateStore.emitChange();
            break;
        case CustomTemplateEnums.CUSTOM_TEMPLATE_ADD_MODULE:
            addModuleToTemplate(data.module);
            CustomTemplateStore.emitChange();
            break;
        case CustomTemplateEnums.CUSTOM_TEMPLATE_REMOVE_MODULE:
            removeModuleForTemplate(data.module);
            CustomTemplateStore.emitChange();
            break;
        case CustomTemplateEnums.CUSTOM_TEMPLATE_NPM_SEARCH_SUCCESS:
            updateSearchResults(data.results);
            CustomTemplateStore.emitChange();
            break;
    }

});

export default CustomTemplateStore;