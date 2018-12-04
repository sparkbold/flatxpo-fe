import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import App from "../App";

import { setProjects } from "../actions/projectActions";
import ProjectList from "../components/ProjectList";

class ProjectListContainer extends React.Component {
  componentDidMount() {
    this.props.onSetProjects();
  }

  render() {
    // console.log("project list container", this.props);
    return (
      <App>
        <Grid container columns={3}>
          <ProjectList projects={this.props.projects} {...this.props} />;
        </Grid>
      </App>
    );
  }
}
const mapDispatchToProps = {
  onSetProjects: setProjects
};

function mapStateToProps(state) {
  return {
    loading: state.projectsList.loading,
    projects: state.projectsList.projects
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectListContainer);
