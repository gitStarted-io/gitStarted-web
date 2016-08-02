/**
 * Created by Durzo on 6/13/2016.
 */

import React from "react";

export default class Create extends React.Component {
    constructor(props) {
        super(props);

        this.githubChange = this.githubChange.bind(this);

        this.state = {
            githubUrl:""
        };
    }

    githubChange(e) {
        this.setState({githubUrl:e.target.value});
    }

    render() {
        return  <div className="create_container">
                        <div className="top">
                            <div>Go to custom! :D</div>
                        </div>
                        <div className="github">
                            <input type="url" onChange={this.githubChange} value={this.state.githubUrl}/>
                            <div className="githubSubmit">Submit</div>
                        </div>
                </div>
    }
}