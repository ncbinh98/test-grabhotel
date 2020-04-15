import React, { Component } from "react";

class CreateProject extends Component {
    state = {};
    render() {
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Create Project</h1>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Basic Card Example</h6>
                                </div>
                                <div className="card-body">
                                    The styling for this basic card example is created by using default Bootstrap utility classNamees. By
                                    using utility classNamees, the style of the card component can be easily modified with no need for any
                                    custom CSS!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateProject;
