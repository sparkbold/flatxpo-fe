import React, { Component, Fragment } from "react";
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from "semantic-ui-react";
import HomepageHeading from "../components/HomepageHeading";
import AuthService from "../services/AuthService";
const Auth = new AuthService();

export default class MobileContainer extends Component {
  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="uncover"
            inverted
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Business</Menu.Item>
            <Menu.Item as="a">Entertainment</Menu.Item>
            <Menu.Item as="a">Productivity</Menu.Item>
            <Menu.Item as="a">Game</Menu.Item>
            {!Auth.loggedIn() ? (
              <Fragment>
                <Menu.Item as="a" href="/login">
                  Log in
                </Menu.Item>
                <Menu.Item as="a" href="/signup">
                  Sign Up
                </Menu.Item>
              </Fragment>
            ) : (
              <Fragment>
                <Menu.Item as="a" href="/login">
                  Log in
                </Menu.Item>
                <Menu.Item as="a" href="/signup">
                  Sign Up
                </Menu.Item>
              </Fragment>
            )}
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: "100vh" }}
          >
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  {!Auth.loggedIn() ? (
                    <Menu.Item position="right">
                      <Button as="a" inverted href="/login">
                        Log in
                      </Button>
                      <Button
                        as="a"
                        inverted
                        style={{ marginLeft: "0.5em" }}
                        href="/signup"
                      >
                        Sign Up
                      </Button>
                    </Menu.Item>
                  ) : (
                    <Menu.Item position="right">
                      <Button as="a" inverted href="/profile">
                        Profile
                      </Button>
                      <Button
                        as="a"
                        inverted
                        style={{ marginLeft: "0.5em" }}
                        href="/"
                      >
                        Logout
                      </Button>
                    </Menu.Item>
                  )}
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}
