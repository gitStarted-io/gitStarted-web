/**
 * Created by Jake Alsemgeest on 2016-05-15.
 */

import UserModel from '../models/user-model'

export default class UserGenerator {
    static generateUser(user) {
        return new UserModel(user);
    }
}