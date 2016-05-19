/**
 * Created by Jake Alsemgeest on 2016-05-15.
 */

import BaseStore from './base-store'
import UserEnums from '../enums/user-enums'
import UserModel from '../models/user-model'
import UserGenerator from '../services/user-generator'
import AppDispatcher from '../dispatcher/dispatcher'

const _store = {
    me:new UserModel({}),
    user:new UserModel({})
}

class UserStoreClass extends BaseStore {
    getStore() {
        return _store;
    }

    getMe() {
        return _store.me;
    }

    getUser() {
        return _store.user;
    }
}

const UserStore = new UserStoreClass();

function setUser(user) {
    _store.user = user;
}

function loginSuccess(user) {
    _store.me = user;
}

AppDispatcher.register((payload) => {
    var action = payload.action;
    var data = payload.payload;

    switch (action) {
        case UserEnums.GET_USER_SUCCESS:
            setUser(data.user);
            UserStore.emitChange();
            break;
        case UserEnums.LOGIN_SUCCESS:
            loginSuccess(data.user);
            UserStore.emitChange();
            break;
    }
});

export default UserStore;