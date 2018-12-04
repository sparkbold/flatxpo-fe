import React from "react";
import { Grid, Segment, Container, Header, Divider } from "semantic-ui-react";
import ProjectCard from "../components/ProjectCard";
import LoaderComponent from "./LoaderComponent";

const styles = {
  projectColumn: {
    marginBottom: 25
  }
};
const ProjectListComponent = ({ projects, loading, history }) => {
  const projectColumns = projects
    ? projects.map(project => (
        <Grid.Column style={styles.projectColumn} key={project.id}>
          <ProjectCard project={project} history={history} />
        </Grid.Column>
      ))
    : null;

  return (
    <Segment vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Instead of focusing on content creation and hard work, we have learned
          how to master the art of doing nothing by providing massive amounts of
          whitespace and generic content that can seem massive, monolithic and
          worth your attention.{" "}
        </p>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          {/* eslint-disable-next-line */}
          <a>OUR FLATXPO's PROJECTS</a>
        </Divider>
      </Container>
      <Grid container columns={3}>
        <Grid.Row>
          {projectColumns}
          <LoaderComponent loading={loading} />
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default ProjectListComponent;
