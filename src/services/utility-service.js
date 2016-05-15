/**
 * Created by Jake Alsemgeest on 2016-05-14.
 */

export default class UtilityService {
    static capitalizeFirstLetter(str) {
        return str[0].toUpperCase() + str.substring(1);
    }
}