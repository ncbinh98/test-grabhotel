import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "@apollo/react-components";

const CREATE_PROJECT = gql`
    mutation createProject($data: CreateProjectInput) {
        createProject(data: $data) {
            id
            name
        }
    }
`;
class CreateProject extends Component {
    state = {
        name: "",
        description: "",
        myFormRef: null,
        isValid: {
            name: true
        }
    };
    handleOnChange = e => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    };
    handleCreateProject = (e, createProject) => {
        e.preventDefault();
        this.setState({
            isValid: {
                name: this.state.name !== "" ? true : false
            }
        });
        if (this.state.name !== "") {
            createProject({
                variables: {
                    data: {
                        name: this.state.name,
                        description: this.state.description
                    }
                }
            });
            this.myFormRef.reset();
            this.setState({
                name: "",
                description: ""
            });
        }
    };

    createProjectMutation = (createProject, { data }) => {
        return (
            <form
                ref={el => (this.myFormRef = el)}
                onSubmit={e => {
                    this.handleCreateProject(e, createProject);
                }}
            >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={this.handleOnChange}
                        type="text"
                        className={this.state.isValid.name ? "form-control" : "form-control is-invalid"}
                        name="name"
                    />

                    <div className="invalid-feedback">Please type your project name.</div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea onChange={this.handleOnChange} className="form-control" name="description" rows="3"></textarea>
                    <div className="invalid-feedback">Project description required.</div>
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        );
    };
    render() {
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Create Project</h1>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 ">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Fill your project information</h6>
                                </div>
                                <div className="card-body ">
                                    <Mutation mutation={CREATE_PROJECT}>{this.createProjectMutation}</Mutation>
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
