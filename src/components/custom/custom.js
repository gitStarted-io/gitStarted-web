/**
 * Created by Durzo on 5/25/2016.
 */

import React from "react";
import CustomLeft from "./custom-left";
import CustomRight from "./custom-right";

export default class Custom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="custom-container">
                        <CustomLeft />
                        <CustomRight />
               </div>
    }
}