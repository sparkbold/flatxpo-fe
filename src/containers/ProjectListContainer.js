import React from "react";
import { connect } from "react-redux";
import { Grid, Responsive } from "semantic-ui-react";
import App from "../App";

import { setProjects } from "../actions/projectActions";
import ProjectListComponent from "../components/ProjectList";

class ProjectListContainer extends React.Component {
  componentDidMount() {
    this.props.onSetProjects();
  }

  render() {
    const filteredProjects = this.props.filtertype
      ? this.props.projects.filter(p =>
          p.project_tags.includes(this.props.filtertype)
        )
      : this.props.projects;
    console.log("Filteredlist", filteredProjects);
    return (
      <App history={this.props.history}>
        <Grid>
          <ProjectListComponent
            projects={filteredProjects}
            history={this.props.history}
          />
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
    projects: state.projectsList.projects,
    filtertype: state.projectsList.filtertype
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectListContainer);
