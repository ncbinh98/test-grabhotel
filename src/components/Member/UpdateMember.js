import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "@apollo/react-components";
const UPDATE_MEMBER = gql`
    mutation updateMember($data: CreateMemberInput, $memberId: ID) {
        updateMember(data: $data, memberId: $memberId) {
            id
            name
            phone
            birthday
        }
    }
`;
class UpdateMember extends Component {
    state = {
        isEdit: false,
        name: this.props.name,
        phone: this.props.phone,
        birthday: this.props.birthday
    };
    handleUpdateMember = (e, updateMember) => {
        updateMember({
            variables: {
                memberId: this.props.member.id,
                data: {
                    name: this.state.name,
                    phone: this.state.phone,
                    birthday: this.state.birthday
                }
            }
        }).then(data => {
            this.setState({
                isEdit: !this.state.isEdit
            });
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
    handleIsEdit = e => {
        this.setState({
            isEdit: !this.state.isEdit
        });
    };
    updateMemberMutation = (updateMember, { error }) => {
        if (this.state.isEdit) {
            return (
                <tr>
                    <th scope="row">{this.props.index + 1}</th>
                    <td>
                        <input
                            onChange={this.handleOnChange}
                            defaultValue={this.props.member.name}
                            type="text"
                            className="form-control"
                            name="name"
                        />
                    </td>
                    <td>
                        <input
                            onChange={this.handleOnChange}
                            defaultValue={this.props.member.phone}
                            type="text"
                            className="form-control"
                            name="phone"
                        />
                    </td>
                    <td>
                        <input
                            onChange={this.handleOnChange}
                            defaultValue={this.props.member.birthday}
                            type="text"
                            className="form-control"
                            name="birthday"
                        />
                    </td>
                    <td>
                        <button
                            style={{ borderRadius: "20px" }}
                            onClick={e => {
                                this.handleUpdateMember(e, updateMember);
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
                    </td>
                </tr>
            );
        } else {
            return (
                <tr>
                    <th scope="row">{this.props.index + 1}</th>
                    <td>{this.props.member.name}</td>
                    <td>{this.props.member.phone}</td>
                    <td>{this.props.member.birthday}</td>
                    <td>
                        <button
                            style={{ borderRadius: "20px" }}
                            onClick={this.handleIsEdit}
                            type="button"
                            className="btn btn-outline-success btn-sm"
                        >
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                        </button>
                    </td>
                </tr>
            );
        }
    };
    render() {
        return <Mutation mutation={UPDATE_MEMBER}>{this.updateMemberMutation}</Mutation>;
    }
}

export default UpdateMember;
