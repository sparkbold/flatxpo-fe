import React from "react";
import { Grid, Segment, Container, Header, Divider } from "semantic-ui-react";
import ProjectCard from "../components/ProjectCard";
import LoaderComponent from "./LoaderComponent";

const styles = {
  projectColumn: {
    minWidth: 250,
    marginBottom: 25
  }
};
const ProjectListComponent = ({ projects, loading, history }) => {
  console.log("Inside project list", projects);
  const projectColumns = projects
    ? projects.map(project => (
        <Grid.Column
          style={styles.projectColumn}
          key={"listcontainer" + project.id}
        >
          <ProjectCard project={project} history={history} />
        </Grid.Column>
      ))
    : null;

  return (
    <Segment vertical>
      <Container text>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          {/* eslint-disable-next-line */}
          <a>"Failing is not an option... it's requirement to success"</a>
        </Divider>
      </Container>
      <Grid>
        <Grid.Row centered>
          {projectColumns}
          <LoaderComponent loading={loading} />
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default ProjectListComponent;
