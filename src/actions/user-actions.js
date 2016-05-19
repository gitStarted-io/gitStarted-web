/**
 * Created by Jake Alsemgeest on 2016-05-15.
 */

import UserEnums from '../enums/user-enums'
import UserGenerator from '../services/user-generator'
import AppDispatcher from '../dispatcher/dispatcher'
import HttpService from '../services/http-service'

const ENDPOINTS = {
    GET_USER: "http://localhost:3000/user/"
}

export default class UserActions {
    static getUser(username) {
        if (typeof username === "string") {
            HttpService.get(ENDPOINTS.GET_USER + username)
                .then((response) => {
                    var user = UserGenerator.generateUser(response.data);
                    AppDispatcher.send(UserEnums.GET_USER_SUCCESS, {
                        user:user
                    });
                }, (error) => {
                    console.log(error);
                });
        }
    }

    static attemptLogin(username, password) {
        var user = UserGenerator.generateUser({
            id:1,
            username:username,
            thumbnail:'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png',
            joinDate:"2016/05/13 09:05:04:653",
            templates:[
            {
                templateId: 1,
                templateName: 'express-is-awesome',
                description: 'An express template with some cool plugins.',
                tags: [
                    'express',
                    'jade'
                ],
                version: '1.0.3',
                upvotes: 120,
                downvotes: 3,
                author: username
            },
            {
                templateId: 2,
                templateName: 'gitstarted',
                description: 'The best template of them all.',
                tags: [
                    'gitStarted',
                    'react',
                    'sql',
                    'express'
                ],
                version: '0.0.1',
                upvotes: 10000000000,
                downvotes: 0,
                author: username
            }
        ]});
        AppDispatcher.send(UserEnums.LOGIN_SUCCESS, {
            user:user
        });
    }
}