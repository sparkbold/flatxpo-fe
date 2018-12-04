import React from "react";
import {
  Grid,
  Card,
  Image,
  Segment,
  Header,
  Button,
  Icon,
  Comment,
  Form
} from "semantic-ui-react";
import LoaderComponent from "./LoaderComponent";
import { connect } from "react-redux";

const styles = {
  projectColumn: {
    marginBottom: 25
  }
};
class ProjectDetail extends React.Component {
  state = {
    content: ""
  };
  render = () => {
    const { project } = this.props;
    const projectComments = project.comments
      ? project.comments.map(comment => (
          <Comment.Group key={comment.id}>
            <Comment>
              <Comment.Avatar src={comment.user.avatar} />
              <Comment.Content>
                <Comment.Author as="a">{comment.user.username}</Comment.Author>
                <Comment.Metadata>
                  <div>{comment.created_at}</div>
                </Comment.Metadata>
                <Comment.Text>{comment.content}</Comment.Text>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        ))
      : null;

    return (
      <Segment style={{ padding: "1em 0em" }} vertical>
        <Grid container stackable verticalAlign="top">
          <Grid.Row>
            {/* <Image src={require(`../assets/wireframe/boolean-icing.png`)} /> */}
            <Grid.Column width={8}>
              <Header as="h1">{project.title}</Header>
              <Header as="h3">{project.user.username}</Header>
              <span className="date">{project.created_at}</span>

              <p style={{ fontSize: "1.33em" }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Header as="h3" dividing>
                Comments
              </Header>
              {projectComments}
              <Form
                reply
                onSubmit={this.props.onAddComment(
                  project.id,
                  this.state.content
                )}
              >
                <Form.TextArea
                  onChange={e => this.setState({ content: e.target.value })}
                />
                <Button
                  content="Add Comment"
                  labelPosition="left"
                  icon="edit"
                  primary
                />
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge" href="/">
                Back
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  };
}

export default connect(
  state => (
    {
      project: state.projectDetail.project
    },
    { onAddComment: (project_id, content) => addComment(project_id, content) }
  )
)(ProjectDetail);
