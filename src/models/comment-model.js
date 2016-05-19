/**
 * Created by Jake Alsemgeest on 2016-05-15.
 */

import BaseModel from './base-model'

export default class CommentModel extends BaseModel {
    constructor(comment) {
        super();

        this._templateId = comment.templateId;
        this._comment = comment.comment;
        this._id = comment.id;
        this._userId = comment.userId;
        this._username = comment.username;
        this._time = new Date(comment.time);
    }

    getTemplateId() {
        return this._templateId;
    }

    getComment() {
        return this._comment;
    }

    getId() {
        return this._id;
    }

    getUserId() {
        return this._userId;
    }

    getUsername() {
        return this._username;
    }

    getTime() {
        return this._time;
    }

    getTimeAsString() {
        return this._time.toDateString();
    }
}