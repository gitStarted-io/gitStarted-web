/**
 * Created by Jake Alsemgeest on 2016-05-14.
 */

import UtilityService from '../services/utility-service'

export default class BaseModel {
    constructor() {
        // this._store = props;
        //
        // var keys = Object.keys(props);
        // var self = this;
        //
        // keys.forEach((key) => {
        //     this[`get`+UtilityService.capitalizeFirstLetter(key)] = (() => {
        //         return self._store[key];
        //     })(self);
        // });
    }

    toJSON() {
        return JSON.stringify(this);
    }
}