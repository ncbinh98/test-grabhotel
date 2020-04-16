import React, { Component } from "react";
import { Mutation } from "@apollo/react-components";
import gql from "graphql-tag";
const ASSIGN_MEMBER = gql`
    mutation assignMember($projectId: ID, $memberId: ID) {
        assignMember(memberId: $memberId, projectId: $projectId) {
            id
            name
        }
    }
`;
class AssignMember extends Component {
    state = {
        chooseMember: ""
    };
    handleOnChange = e => {
        this.setState({
            chooseMember: e.target.value
        });
    };
    handleAssignMember = assignMember => {
        if (this.state.chooseMember !== "") {
            assignMember({
                variables: {
                    projectId: this.props.project.id,
                    memberId: this.state.chooseMember
                }
            }).then(data => {
                this.props.refetch();
            });
        }
    };
    render() {
        return (
            <div>
                <Mutation mutation={ASSIGN_MEMBER}>
                    {(assignMember, { data, loading }) => {
                        if (loading) {
                            return <span>Loading...</span>;
                        }
                        return (
                            <div>
                                <select onChange={this.handleOnChange} name="Members">
                                    <option value="">Choose members</option>
                                    {this.props.members.map(mem => {
                                        var checkExist = this.props.project.members.find((el, index) => {
                                            return el.id === mem.id;
                                        });
                                        if (!checkExist)
                                            return (
                                                <option key={mem.id} value={mem.id}>
                                                    {mem.name}
                                                </option>
                                            );
                                    })}
                                </select>
                                <button
                                    onClick={e => {
                                        this.handleAssignMember(assignMember);
                                    }}
                                    className="btn btn-primary btn-sm ml-2 mb-2"
                                >
                                    Assign
                                </button>
                            </div>
                        );
                    }}
                </Mutation>
            </div>
        );
    }
}

export default AssignMember;
