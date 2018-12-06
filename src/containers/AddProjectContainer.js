import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import { connect } from "react-redux";
import { createProject } from "../actions/projectActions";

class AddProjectContainer extends React.Component {
  state = {
    title: "",
    description: "",
    github_url: "",
    demo_url: "",
    imgage: "",
    img: "",
    view: "1"
  };

  handleChange = e => {
    // console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    console.log("AddProjectfired");
    e.preventDefault();
    const formData = new FormData();
    const projectData = {
      title: this.state.title,
      slug: this.state.title
        .toLowerCase()
        .split(" ")
        .join("_"),
      description: this.state.description,
      github_url: this.state.github_url,
      demo_url: this.state.demo_url,
      img: this.state.img,
      views: 1
    };
    formData.append("project", projectData);
    // console.log(projectData);
    this.props.onCreateProject(formData);
    this.props.history.push("/");
  };

  onChangeFile = e => {
    console.log(e.target.files[0]);
    this.setState({ img: e.target.files[0] });
  };

  render() {
    return (
      <div className="login-form">
        {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}

        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src={require("../assets/wireframe/boolean-icing.png")} />{" "}
              Create your project
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="heading"
                  iconPosition="left"
                  placeholder="Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="edit"
                  iconPosition="left"
                  placeholder="description..."
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="github"
                  iconPosition="left"
                  placeholder="github_url"
                  name="github_url"
                  value={this.state.github_url}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="linkify"
                  iconPosition="left"
                  placeholder="demo_url"
                  name="demo_url"
                  value={this.state.demo_url}
                  onChange={this.handleChange}
                />
                <Button
                  htmlFor="addfile"
                  as="label"
                  style={{ margin: "1em 0em" }}
                >
                  Upload Project Image
                </Button>
                <input
                  hidden
                  multiple
                  id="addfile"
                  type="file"
                  onChange={this.onChangeFile}
                />

                <Button color="teal" fluid size="large">
                  Create Project
                </Button>
              </Segment>
              <Message>
                Change your mind? <a href="/">Go back</a>
              </Message>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
const mapDispatchToProps = {
  onCreateProject: createProject
};
export default connect(
  null,
  mapDispatchToProps
)(AddProjectContainer);
