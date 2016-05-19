/**
 * Created by Jake Alsemgeest on 2016-05-14.
 */

import BaseModel from './base-model'

export default class TemplateModel extends BaseModel {
    constructor(template) {
        super();

        this._templateId = template.templateId;
        this._templateName = template.templateName;
        this._description = template.description;
        this._author = template.author;
        this._upvotes = template.upvotes;
        this._downvotes = template.downvotes;
        this._tags = template.tags || [];
        this._version = template.version;
    }

    getTemplateId() {
        return this._templateId;
    }

    getTemplateName() {
        return this._templateName;
    }

    getDescription() {
        return this._description;
    }

    getAuthor() {
        return this._author;
    }

    getUpvotes() {
        return this._upvotes;
    }

    getDownvotes() {
        return this._downvotes;
    }

    getTags() {
        return this._tags;
    }

    getVersion() {
        return this._version;
    }
}