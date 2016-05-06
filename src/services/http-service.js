/**
 * Created by Jake Alsemgeest on 2016-05-05.
 */
import Axios from 'axios'

export default class HttpService {

    static get(url) {
        return Axios.get(url);
    }

    static post(url, params) {
        return Axios.post(url, params);
    }
}