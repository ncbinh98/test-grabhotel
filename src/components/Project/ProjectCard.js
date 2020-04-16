import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "@apollo/react-components";
import { Query } from "react-apollo";
import AssignMember from "./AssignMember";
const UPDATE_PROJECT = gql`
    mutation updateProject($data: CreateProjectInput, $projectId: ID) {
        updateProject(data: $data, projectId: $projectId) {
            id
            name
        }
    }
`;

const UNASSIGN_MEMBER = gql`
    mutation unassignMember($projectId: ID, $memberId: ID) {
        unassignMember(memberId: $memberId, projectId: $projectId) {
            id
            name
        }
    }
`;

const GET_MEMBERS = gql`
    query {
        members {
            id
            name
        }
    }
`;
class ProjectCard extends Component {
    state = { isEdit: false, name: this.props.project.name, description: this.props.project.description };
    isEditDescription = description => {
        if (this.state.isEdit) {
            return (
                <textarea
                    onChange={this.handleOnChange}
                    defaultValue={description}
                    className="form-control"
                    name="description"
                    rows="3"
                ></textarea>
            );
        } else {
            return <span>{description}</span>;
        }
    };
    showMembers = members => {
        return members.map((member, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{member.name}</td>
                    <td>{member.phone}</td>
                    <td>
                        <Mutation mutation={UNASSIGN_MEMBER}>
                            {(unassignMember, { data, loading }) => {
                                if (loading) return <span>loading...</span>;
                                return (
                                    <button
                                        style={{ borderRadius: "20px" }}
                                        onClick={e => {
                                            unassignMember({
                                                variables: {
                                                    projectId: this.props.project.id,
                                                    memberId: member.id
                                                }
                                            }).then(data => {
                                                this.props.refetch();
                                            });
                                        }}
                                        type="button"
                                        className="btn btn-outline-danger btn-sm ml-2"
                                    >
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                    </button>
                                );
                            }}
                        </Mutation>
                    </td>
                </tr>
            );
        });
    };
    handleIsEdit = () => {
        this.setState({
            isEdit: !this.state.isEdit
        });
    };
    handleOnChange = e => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    };
    handleUpdateProject = updateProject => {
        updateProject({
            variables: {
                projectId: this.props.project.id,
                data: {
                    name: this.state.name,
                    description: this.state.description
                }
            }
        }).then(data => {
            this.props.refetch();
            this.setState({
                isEdit: !this.state.isEdit
            });
        });
    };
    isEditBtn = () => {
        if (this.state.isEdit) {
            return (
                <Mutation mutation={UPDATE_PROJECT}>
                    {(updateProject, { data }) => {
                        return (
                            <div style={{ borderRadius: "20px", position: "absolute", top: 10, right: 15 }}>
                                <button
                                    style={{ borderRadius: "20px" }}
                                    onClick={e => {
                                        this.handleUpdateProject(updateProject);
                                    }}
                                    type="button"
                                    className="btn btn-outline-primary btn-sm"
                                >
                                    <i className="fa fa-floppy-o" aria-hidden="true"></i>
                                </button>
                                <button
                                    style={{ borderRadius: "20px" }}
                                    onClick={this.handleIsEdit}
                                    type="button"
                                    className="btn btn-outline-danger btn-sm ml-2"
                                >
                                    <i className="fa fa-ban" aria-hidden="true"></i>
                                </button>
                            </div>
                        );
                    }}
                </Mutation>
            );
        } else {
            return (
                <button
                    style={{ borderRadius: "20px", position: "absolute", top: 10, right: 15 }}
                    type="button"
                    onClick={this.handleIsEdit}
                    className="btn btn-outline-success btn-sm "
                >
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
            );
        }
    };
    isEditName = prjName => {
        if (this.state.isEdit) {
            return (
                <input
                    style={{ width: "40%" }}
                    onChange={this.handleOnChange}
                    defaultValue={prjName}
                    type="text"
                    className="form-control"
                    name="name"
                />
            );
        } else {
            return <h6 className="m-0 font-weight-bold text-primary">{prjName}</h6>;
        }
    };

    render() {
        return (
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6">
                    <div className="card shadow mb-4">
                        <div className="card-header position-relative py-3 d-inline-flex">
                            {this.isEditName(this.props.project.name)}
                            {this.isEditBtn()}
                        </div>
                        <div
                            className="card-body"
                            style={{
                                whiteSpace: "pre"
                            }}
                        >
                            {this.isEditDescription(this.props.project.description)}
                            <br />
                            <div style={{ height: "10px" }}></div>
                            <span style={{ fontSize: "12.5px" }}>
                                Assigned Members:{" "}
                                <Query query={GET_MEMBERS}>
                                    {({ loading, error, data }) => {
                                        if (loading) return "Loading...";
                                        if (error) return `Error! ${error.message}`;

                                        return (
                                            <AssignMember
                                                refetch={this.props.refetch}
                                                project={this.props.project}
                                                members={data.members}
                                            />
                                        );
                                    }}
                                </Query>
                            </span>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>{this.showMembers(this.props.project.members)}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;
