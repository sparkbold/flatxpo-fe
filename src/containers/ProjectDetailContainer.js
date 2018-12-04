import React from "react";
import { connect } from "react-redux";
import { Grid, Dimmer, Loader, Image, Segment, Input } from "semantic-ui-react";

// import { loadProjectDetails, addComment } from "../actions/projectsList";
import ProjectDetail from "../components/ProjectDetail";
import App from "../App";

class ProjectDetailsContainer extends React.Component {
  componentDidMount() {
    console.log("ProjectDetailContainer fired");
  }

  render() {
    console.log(this.props);
    return (
      <App>
        <ProjectDetail project={this.props.project} />
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
