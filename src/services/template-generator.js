/**
 * Created by Jake Alsemgeest on 2016-05-15.
 */

import TemplateModel from '../models/template-model'

export default class TemplateGenerator {
    static generateTemplate(template) {
        return new TemplateModel(template);
    }
}