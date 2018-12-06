import React from "react";
import {
  Grid,
  Segment,
  Header,
  Button,
  Comment,
  Form,
  Image
} from "semantic-ui-react";

class ProjectDetail extends React.Component {
  state = {
    content: ""
  };
  resetForm = () => {
    this.setState({ content: "" });
  };
  render = () => {
    // console.log("ProjectDetail props", this.props);
    const { project, onAddComment } = this.props;
    console.log(project.user ? project.user.username : "No user");
    const projectComments = project.comments
      ? project.comments.map(comment => (
          <Comment.Group key={comment.id}>
            <Comment>
              <Comment.Avatar
                src={
                  comment.user.avatar
                    ? comment.user.avatar
                    : require(`../assets/wireframe/boolean-icing.png`)
                }
              />
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
            <Grid.Column width={8}>
              <Header as="h1">{project.title}</Header>
              <Header as="h3">
                by {project.user.first_name} {project.user.last_name}
              </Header>
              <span className="date">{project.created_at}</span>

              <p style={{ fontSize: "1.33em" }}>{project.description}</p>
              <Header as="h3" dividing>
                Comments
              </Header>
              {projectComments}
              <Form
                reply
                onSubmit={() => {
                  onAddComment(project.id, this.state.content);
                  this.resetForm();
                }}
              >
                <Form.TextArea
                  onChange={e =>
                    this.setState({
                      content: e.target.value
                    })
                  }
                />
                <Button
                  content="Add Comment"
                  labelPosition="left"
                  icon="edit"
                  primary
                />
              </Form>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image
                src={
                  project.img_url
                    ? project.img_url
                    : require(`../assets/wireframe/boolean-icing.png`)
                }
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge" onClick={() => this.props.history.push("/")}>
                Back
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  };
}

export default ProjectDetail;
