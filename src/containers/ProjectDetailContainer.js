import React from "react";
import { connect } from "react-redux";
import { Grid, Dimmer, Loader, Image, Segment } from "semantic-ui-react";

import { loadProjectDetails } from "../actions/projectsList";
import ProjectDetail from "../components/ProjectDetail";

class ProjectDetailsContainer extends React.Component {
  componentDidMount() {
    console.log("ProjectDetailContainer fired");
  }

  render() {
    console.log(this.props);
    return this.props.loading ? (
      <Segment>
        <Dimmer active>
          <Loader />
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    ) : (
      <Grid>
        <ProjectDetail project={this.props.project} />;
      </Grid>
    );
  }
}
const mapDispatchToProps = {
  onLoadProjectDetails: loadProjectDetails
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
