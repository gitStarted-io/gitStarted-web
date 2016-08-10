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
        this._collaborators = data.collaborators;
        this._isPrivate = data.isPrivate;
        this._frameworks = data.frameworks;
        this._buildManagers = data.buildManager;

    }

    // Getters

    get templateName() {
        return this._templateName;
    }

    get description() {
        return this._description;
    }

    get contributors() {
        return this._contributors;
    }

    get modules() {
        return this._modules;
    }

    get collaborators() {
        return this._collaborators;
    }

    get isPrivate() {
        return this._isPrivate;
    }

    get frameworks() {
        return this._frameworks;
    }

    get buildManagers() {
        return this._buildManagers;
    }

    // Setters

    set name(name) {
        this._templateName = name;
    }

    set description(description) {
        this._description = description;
    }

    set isPrivate(value) {
        this._isPrivate = value;
    }

    // Functions

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

    addCollaborator(user) {
        for (var i = 0; i < this._collaborators.length; i++) {
            if (this._collaborators[i] === user) {
                return false;
            }
        }
        this._collaborators.push(user);
        return true;
    }

    updateFramework(value, framework) {
        this._frameworks[framework] = value;
    }

    updateBuildManager(value, buildmanager) {
        this._buildManagers[buildmanager] = value;
    }

    // Static Functions

    static getDefaultTemplate() {
        return new this({
            templateName:"Repo Name",
            description:"Read Me...",
            contributors:[],
            modules: [],
            collaborators: [],
            isPrivate: false,
            frameworks:{},
            buildManager:{}
        });
    }
}