import React from "react";
import { connect } from "react-redux";
import { Grid, Dimmer, Loader, Image, Segment } from "semantic-ui-react";

import { setProjects } from "../actions/projectsList";
import ProjectList from "../components/ProjectList";

class ProjectListContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.onSetProjects();
    // this.getProjects();
  }

  // getProjects = async () => {
  //   const projects = await fetch("http://localhost:3000/api/v1/projects");
  // };

  render() {
    // console.log("project list container", this.props);
    return this.props.loading ? (
      <Segment>
        <Dimmer active>
          <Loader />
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    ) : (
      <Grid container columns={3}>
        <ProjectList projects={this.props.projects} {...this.props} />;
      </Grid>
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
