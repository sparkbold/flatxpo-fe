import React from "react";
import { Grid, Card, Image } from "semantic-ui-react";
import LoaderComponent from "./LoaderComponent";
import { connect } from "react-redux";

const styles = {
  projectColumn: {
    marginBottom: 25
  }
};
class ProjectDetail extends React.Component {
  render = () => {
    // debugger;
    const { project } = this.props;
    const projectComments = project.comments
      ? project.comments.map(comment => (
          <Grid.Column style={styles.projectColumn} key={comment.id}>
            <Card.Content>
              <Card.Header style={{ fontSize: "1.33em" }}>
                <Image avatar src={comment.user.avatar} />
                <b>{comment.user.username}</b>
              </Card.Header>
              <Card.Meta>
                <span className="date">{comment.created_at}</span>
              </Card.Meta>
              <Card.Description>{comment.content}</Card.Description>
            </Card.Content>
          </Grid.Column>
        ))
      : null;

    return <Grid.Row>{projectComments}</Grid.Row>;
  };
}

export default connect(state => ({
  project: state.projectDetail.project
}))(ProjectDetail);
