/**
 * Created by Durzo on 5/26/2016.
 */

import Module from "../models/module";

export default class NPMGenerator {
    static transform(response) {
        return response.map((module) => {
            return new Module(module);
        });
    }
}