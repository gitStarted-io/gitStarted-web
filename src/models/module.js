/**
 * Created by Durzo on 5/25/2016.
 */

import React from "react";
import BaseModel from "./base-model"
import CustomModule from "../components/custom/custom-module"

export default class Modules extends BaseModel {
    constructor(data) {
        super();

        this._moduleName = data.name;
        this._version = data.version;
        this._description = data.description;
    }

    getModuleName() {
        return this._moduleName;
    }

    getVersion() {
        return this._version;
    }

    getDescription() {
        return this._description;
    }

    getReactComponent(data) {
        return <CustomModule module={this} isSelected={data.isSelected} />;
    }
}