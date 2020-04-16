import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
    state = {};
    render() {
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Home</h1>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-4">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Members List</h6>
                                </div>
                                <div className="card-body">
                                    Print members and update members
                                    <Link to="/members/list" className=" ml-2 btn btn-primary btn-sm">
                                        Explore
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Create Member</h6>
                                </div>
                                <div className="card-body">
                                    Create new member
                                    <Link to="/members/create" className=" ml-2 btn btn-primary btn-sm">
                                        Explore
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-4">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Project List</h6>
                                </div>
                                <div className="card-body">
                                    Print projects, update, assign member
                                    <Link to="/projects/list" className=" ml-2 btn btn-primary btn-sm">
                                        Explore
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Create Project</h6>
                                </div>
                                <div className="card-body">
                                    Create new project
                                    <Link to="/projects/create" className=" ml-2 btn btn-primary btn-sm">
                                        Explore
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
