import React from "react";
import { Grid } from "semantic-ui-react";
import ProjectCard from "../components/ProjectCard";
import LoaderComponent from "./LoaderComponent";

const styles = {
  projectColumn: {
    marginBottom: 25
  }
};
const ProjectListComponent = ({ projects, isLoading, history }) => {
  const projectColumns = projects
    ? projects.map(project => (
        <Grid.Column style={styles.projectColumn} key={project.id}>
          <ProjectCard project={project} history={history} />
        </Grid.Column>
      ))
    : null;

  return (
    <Grid.Row>
      {projectColumns}
      <LoaderComponent isLoading={isLoading} />
    </Grid.Row>
  );
};

export default ProjectListComponent;
