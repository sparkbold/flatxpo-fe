import React from "react";
import { connect } from "react-redux";

import { loadProjectDetails, addComment } from "../actions/projectActions";
import ProjectDetail from "../components/ProjectDetail";
import App from "../App";

class ProjectDetailsContainer extends React.Component {
  id = window.location.pathname.split("/projects/")[1];
  componentDidMount() {
    console.log("ProjectDetailContainer fired");
    this.props.onLoadProjectDetails(this.id);
  }

  render() {
    console.log(this.props);
    return (
      <App>
        <ProjectDetail
          project={this.props.project}
          onAddComment={(project_id, content) =>
            this.props.onAddComment(project_id, content)
          }
          onLoadProjectDetails={id => this.props.onLoadProjectDetails(id)}
        />
      </App>
    );
  }
}
const mapDispatchToProps = {
  onLoadProjectDetails: loadProjectDetails,
  onAddComment: addComment
};

function mapStateToProps(state) {
  return {
    loading: state.projectDetail.loading,
    project: state.projectDetail.project
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetailsContainer);
