/**
 * Created by Jake Alsemgeest on 2016-05-15.
 */

import CommentModel from '../models/comment-model'

export default class CommentGenerator {
    static generateComment(comment) {
        return new CommentModel(comment);
    }
}