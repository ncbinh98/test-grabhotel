import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import ProjectCard from "./ProjectCard";
const GET_PROJECT = gql`
    query project($projectId: ID) {
        project(projectId: $projectId) {
            id
            name
            description
            members {
                id
                name
                phone
            }
        }
    }
`;

class ProjectDetail extends Component {
    state = {};

    showProject = projectId => {
        return (
            <Query query={GET_PROJECT} variables={{ projectId: projectId }} fetchPolicy="network-only">
                {({ loading, error, data, refetch }) => {
                    var result = null;

                    if (loading) return <span>Loading...</span>;
                    else {
                        return <ProjectCard project={data.project} refetch={refetch} />;
                    }
                }}
            </Query>
        );
    };
    render() {
        var { match } = this.props;
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Project Detail</h1>
                    </div>
                    {this.showProject(match.params.id)}
                </div>
            </div>
        );
    }
}

export default ProjectDetail;
