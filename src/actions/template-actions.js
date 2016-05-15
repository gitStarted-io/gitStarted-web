/**
 * Created by Jake Alsemgeest on 2016-05-15.
 */

import HttpService from '../services/http-service'
import AppDispatcher from '../dispatcher/dispatcher'
import TemplateEnums from '../enums/template-enums'
import TemplateGenerator from '../services/template-generator'

const ENDPOINTS = {
    GET_TEMPLATE: "http://localhost:3000/template/"
}

export default class TemplateActions {
    static getTemplate(term) {
        
        var promise = HttpService.get(ENDPOINTS.GET_TEMPLATE + term);
        
        promise.then((response) => {
            if (response) {
                var template = TemplateGenerator.generateTemplate(response.data);
                AppDispatcher.send(TemplateEnums.GET_TEMPLATE_SUCCESS, {
                    template: template,
                    templateName: term
                });
            }
        }, (error) => {
           console.log(error); 
        });
    }
}