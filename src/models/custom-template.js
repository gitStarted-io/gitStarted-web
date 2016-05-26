/**
 * Created by Durzo on 5/25/2016.
 */

import BaseModel from "./base-model";
import Module from "./module"

export default class CustomTemplate extends BaseModel {
    constructor(data) {
        super();

        this._templateName = data.templateName;
        this._description = data.description;
        this._contributors = data.contributors;
        this._modules = data.modules;

    }

    getTemplateName() {
        return this._templateName;
    }

    getDescription() {
        return this._description;
    }

    getContributors() {
        return this._contributors;
    }

    getModules() {
        return this._modules;
    }

    setName(name) {
        this._templateName = name;
    }

    setDescription(description) {
        this._description = description;
    }

    addModule(newModule) {
        this._modules.forEach((module) => {
            if (module.getModuleName() === newModule.getModuleName()) {
                return;
            }
        });
        this._modules.push(newModule);
    }

    removeModule(newModule) {
        for (var i = 0; i < this._modules.length; i++) {
            if (this._modules[i].getModuleName() === newModule.getModuleName()) {
                this._modules.splice(i, 1);
                break;
            }
        }
    }

    static getDefaultTemplate() {
        return new this({
            templateName:"Template Name",
            description:"Description...",
            contributors:[],
            modules: []
        });
    }
}