/**
 * Created by Jake Alsemgeest on 2016-05-15.
 */

import React from 'react'
import BaseModel from './base-model'
import TemplateModel from './template-model'
import UserToolbarButton from '../components/user/user-toolbar-button'

export default class UserModel extends BaseModel {
    constructor(user) {
        super();

        this._id = user.id;
        this._username = user.username;
        this._thumbnail = user.thumbnail;
        this._templates = [];
        this._joinDate = new Date(user.joinDate);

        if (user.templates) {
            this._templates = user.templates.map((template) => {
                return new TemplateModel(template);
            });
        }

    }

    getId() {
        return this._id;
    }

    getUsername() {
        return this._username;
    }

    getThumbnail() {
        return this._thumbnail;
    }

    getTemplates() {
        return this._templates;
    }

    getJoinDate() {
        return this._joinDate;
    }

    getJoinDateToString() {
        return this._joinDate.toDateString();
    }

    getUserButton() {
        return <UserToolbarButton user={this} />
    }
}