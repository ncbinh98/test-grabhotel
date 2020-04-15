import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "@apollo/react-components";

const CREATE_MEMBER = gql`
    mutation createMember($data: CreateMemberInput) {
        createMember(data: $data) {
            id
            name
            phone
            birthday
        }
    }
`;
class CreateMember extends Component {
    state = {
        name: "",
        phone: "",
        birthday: "",
        myFormRef: null,
        isValid: {
            name: true,
            phone: true,
            birthday: true
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
    handleCreateMember = (e, createMember) => {
        e.preventDefault();
        console.log(createMember);
        this.setState({
            isValid: {
                name: this.state.name !== "" ? true : false,
                phone: this.state.phone !== "" ? true : false,
                birthday: this.state.birthday !== "" ? true : false
            }
        });
        if (this.state.name !== "" && this.state.phone !== "" && this.state.birthday !== "") {
            createMember({
                variables: {
                    data: {
                        name: this.state.name,
                        phone: this.state.phone,
                        birthday: this.state.birthday
                    }
                }
            });
            this.myFormRef.reset();
            this.setState({
                name: "",
                phone: "",
                birthday: ""
            });
        }
    };

    createMemberMutation = (createMember, { data }) => {
        return (
            <form
                ref={el => (this.myFormRef = el)}
                onSubmit={e => {
                    this.handleCreateMember(e, createMember);
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

                    <div className="invalid-feedback">Please type your name.</div>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        onChange={this.handleOnChange}
                        type="text"
                        className={this.state.isValid.phone ? "form-control" : "form-control is-invalid"}
                        name="phone"
                    />
                    <div className="invalid-feedback">Please type your phone.</div>
                </div>
                <div className="form-group">
                    <label htmlFor="birthday">birthday</label>
                    <input
                        onChange={this.handleOnChange}
                        type="text"
                        className={this.state.isValid.birthday ? "form-control" : "form-control is-invalid"}
                        name="birthday"
                    />
                    <div className="invalid-feedback">Please type your birthday.</div>
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
                        <h1 className="h3 mb-0 text-gray-800">Create Member</h1>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 ">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Fill your information</h6>
                                </div>
                                <div className="card-body ">
                                    <Mutation mutation={CREATE_MEMBER}>{this.createMemberMutation}</Mutation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateMember;
