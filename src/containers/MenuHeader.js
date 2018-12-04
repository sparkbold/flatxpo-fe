import React, { Component } from "react";
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility
} from "semantic-ui-react";

import AuthService from "../services/AuthService";
const Auth = new AuthService();

export default class MenuHeader extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
      >
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 700, padding: "1em 0em" }}
          vertical
        >
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Menu.Item as="a" active href="/">
                Home
              </Menu.Item>
              <Menu.Item as="a">Business</Menu.Item>
              <Menu.Item as="a">Entertainment</Menu.Item>
              <Menu.Item as="a">Productivity</Menu.Item>
              <Menu.Item as="a">Game</Menu.Item>
              {!Auth.loggedIn() ? (
                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed} href="/login">
                    Log in
                  </Button>

                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                    href="/signup"
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
              ) : (
                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed} href="/profile">
                    Profile
                  </Button>

                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                    href="/"
                    onClick={() => Auth.logout()}
                  >
                    Logout
                  </Button>
                </Menu.Item>
              )}
            </Container>
          </Menu>
          {children}
        </Segment>
      </Visibility>
    );
  }
}
