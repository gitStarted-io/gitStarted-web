/**
 * Created by Jake Alsemgeest on 2016-05-15.
 */

import CommentEnums from '../enums/comment-enums'
import AppDispatcher from '../dispatcher/dispatcher'
import HttpService from '../services/http-service'
import CommentGenerator from '../services/comment-generator'

const ENDPOINTS = {
    GET_COMMENTS: "http://localhost:3000/template/comment/"
}

export default class CommentActions {
    static getCommentsForTemplate(templateId) {
        if (templateId) {

            HttpService.get(ENDPOINTS.GET_COMMENTS + templateId)
                .then((response) => {
                    var comments = response.data.comments.map((comment) => {
                       return CommentGenerator.generateComment(comment);
                    });
                    AppDispatcher.send(CommentEnums.GET_TEMPLATE_COMMENTS_SUCCESS, {
                        comments:comments,
                        template:templateId
                    });
                }, (error) => {
                    console.log(error);
                });
        }
    }
}
