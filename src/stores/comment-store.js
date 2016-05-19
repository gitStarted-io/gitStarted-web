/**
 * Created by Jake Alsemgeest on 2016-05-15.
 */

import AppDispatcher from '../dispatcher/dispatcher'
import CommentEnums from '../enums/comment-enums'
import BaseStore from './base-store'

import FakeComments from '../fake/comment-results'
import CommentModel from '../models/comment-model'

const _store = {
    comments:[],
    templateId:''
}

class CommentStoreClass extends BaseStore {
    getStore() {
        return _store;
    }

    getComments() {
        return _store.comments;
    }
}

const CommentStore = new CommentStoreClass();

function setComments(comments) {
    _store.comments = comments;
}

function setTemplateId(id) {
    _store.templateId = id;
}

AppDispatcher.register((payload) => {
    var action = payload.action;
    var data = payload.payload;

    switch (action) {
        case CommentEnums.GET_TEMPLATE_COMMENTS_SUCCESS:
            setComments(data.comments);
            setTemplateId(data.template);
            CommentStore.emitChange();
            break;
    }
});

export default CommentStore;