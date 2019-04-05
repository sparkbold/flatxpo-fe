import React, { Component } from "react";
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from "semantic-ui-react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {
  clickBusiness,
  clickEducation,
  clickProductivity,
  clickGames,
  clickAll
} from "../actions/projectActions";
import AuthService from "../services/AuthService";
const Auth = new AuthService();

class MobileContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children, history } = this.props;
    const { fixed } = this.state;
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
            <Menu.Item as="a" onClick={() => history.push("/")}>
              Home
            </Menu.Item>
            <Menu.Item as="a" href="#projects" onClick={this.props.onClickAll}>
              All
            </Menu.Item>
            <Menu.Item as="a" onClick={this.props.onClickBusiness}>
              Filter 1
            </Menu.Item>
            <Menu.Item as="a" onClick={this.props.onClickProductivity}>
              Filter 2
            </Menu.Item>
            <Menu.Item as="a" onClick={this.props.onClickGames}>
              Filter 3
            </Menu.Item>
            {!Auth.loggedIn() ? (
              <Menu.Item position="right">
                <Button
                  as="a"
                  inverted={!fixed}
                  onClick={() => history.push("/login")}
                >
                  Log in
                </Button>

                <Button
                  as="a"
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                  onClick={() => history.push("/signup")}
                >
                  Sign Up
                </Button>
              </Menu.Item>
            ) : (
              <Menu.Item position="right">
                <Button
                  as="a"
                  inverted={!fixed}
                  onClick={() => history.push("/add-project")}
                >
                  Add Project
                </Button>

                <Button
                  as="a"
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                  onClick={() => {
                    Auth.logout();
                    history.push("/");
                  }}
                >
                  Logout
                </Button>
              </Menu.Item>
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
              style={{ minHeight: 80, padding: "1em 0em" }}
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
              {/* <HomepageHeading mobile /> */}
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}
const mapDispatchToProps = {
  onClickBusiness: clickBusiness,
  onClickEducation: clickEducation,
  onClickProductivity: clickProductivity,
  onClickGames: clickGames,
  onClickAll: clickAll
};
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(MobileContainer)
);
