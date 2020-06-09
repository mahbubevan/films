import React, { Component } from "react";
import { Button } from "reactstrap";

class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="mt-5">
                    <h5>Welcome</h5>
                </div>
            </div>
        );
    }
}

export default Welcome;
