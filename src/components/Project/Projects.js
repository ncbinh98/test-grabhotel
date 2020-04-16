import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Project from "./ProjectDetail";
const GET_PROJECTS = gql`
    query {
        projects {
            id
            name
            description
        }
    }
`;

class Projects extends Component {
    state = {};
    showProject = () => {
        return (
            <Query query={GET_PROJECTS} fetchPolicy="network-only">
                {({ loading, error, data }) => {
                    var result = null;
                    if (loading)
                        return (
                            <tr>
                                <th>Loading...</th>
                            </tr>
                        );
                    else {
                        result = data.projects.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{value.name}</td>
                                    <td>{value.description}</td>
                                    <td>
                                        <NavLink to={`${this.props.match.url}/${value.id}`} className="btn btn-outline-primary btn-sm">
                                            Details
                                        </NavLink>
                                    </td>
                                </tr>
                            );
                        });
                    }
                    if (error) return `Error! ${error}`;

                    return result;
                }}
            </Query>
        );
    };
    render() {
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Projects</h1>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Basic Card Example</h6>
                                </div>
                                <div className="card-body">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>{this.showProject()}</tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
