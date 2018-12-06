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
import AuthService from "../services/AuthService";

export default class Login extends React.Component {
  constructor() {
    super();
    this.Auth = new AuthService();
    this.state = { username: "", password: "" };
  }

  resetForm = () => {
    this.setState({ username: "", password: "" });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.Auth.login(this.state.username, this.state.password)
      .then(response => {
        console.log("====>", response);
        if (response.jwt) {
          return this.props.history.replace("/");
        } else {
          alert(response.message);
          this.resetForm();
          return this.props.history.push("/login");
        }
      })
      .catch(err => {
        alert(err);
        this.props.history.replace("/login");
      });
  };

  componentWillMount() {
    if (this.Auth.loggedIn()) this.props.history.replace("/");
  }

  handleChange = e => {
    // console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log("Login fired");
    return (
      <div className="login-form">
        {/*
      Heads up! The styles below are necessary for the correct render of this form.
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
              Log-in to your account
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address or username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />

                <Button color="teal" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href="/signup">Sign Up</a> or <a href="/">Home</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
