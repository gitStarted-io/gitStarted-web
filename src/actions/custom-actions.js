/**
 * Created by Durzo on 5/25/2016.
 */

import AppDispatcher from "../dispatcher/dispatcher"
import CustomEnums from "../enums/custom-enums"
import Module from "../models/module"
import HttpService from "../services/http-service"

export default class CustomActions {
    static setTemplateName(name) {
        if (!name) return;

        AppDispatcher.send(CustomEnums.CUSTOM_TEMPLATE_NAME_CHANGED, {
            templateName: name
        });
    }

    static setDescription(description) {
        if (!description) return;

        AppDispatcher.send(CustomEnums.CUSTOM_TEMPLATE_DESCRIPTION_CHANGED ,{
            description:description
        });
    }

    static getTopModules() {

        AppDispatcher.send(CustomEnums.CUSTOM_TEMPLATE_TOP_MODULES, {
            results: [
                new Module({
                    name:"express",
                    version:"1.0.3",
                    description:"Fast, and awesome"
                }),
                new Module({
                    name:"gulp",
                    version:"1.1.3",
                    description:"The streaming build system"
                }),
                new Module({
                    name:"gitStarted",
                    version:"1000",
                    description:"Wouldn't you like to know."
                })
            ] 
        });

    }

    static selectedModule(module) {
        if (!module) return;

        AppDispatcher.send(CustomEnums.CUSTOM_TEMPLATE_ADD_MODULE, {
            module:module
        });
    }
    
    static removeModule(module) {
        if (!module) return;
        
        AppDispatcher.send(CustomEnums.CUSTOM_TEMPLATE_REMOVE_MODULE, {
            module: module
        });
    }
}