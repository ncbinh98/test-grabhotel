import React, { Component } from "react";

class NotFound extends Component {
    state = {};
    render() {
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">404 Not Found!</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;
