import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import AuthService from "./services/AuthService";
import HomepageHeading from "./components/HomepageHeading";
const Auth = new AuthService();

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};
/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
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
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
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
            <Menu.Item as="a" href="/login">
              Log in
            </Menu.Item>
            <Menu.Item as="a" href="/signup">
              Sign Up
            </Menu.Item>
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

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const Homepage = props => {
  return (
    <ResponsiveContainer>
      {/* <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Help You to Promote Your Personal Branch
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We can give your project porfolios superpowers to show things that
              they never thought possible. Let us delight your prospective
              clients and empower your needs... through pure data analytics.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Yes that's right, you thought it was the stuff of dreams, but even
              bananas can be bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src={require("./images/wireframe/boolean-icing.png")}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> */}

      <Segment style={{ padding: "8em 0em" }} vertical>
        {props.children}
      </Segment>

      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "What an App"
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                That is what they all say about our Flatiron Grads' apps
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "I shouldn't have gone with their competitor."
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <Image avatar src={require("./assets/wireframe/nan.jpg")} />
                <b>Vi0let</b> Chief Fun Officer Acme Toys
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Sitemap</List.Item>
                  <List.Item as="a">Contact Us</List.Item>
                  <List.Item as="a">Hello World</List.Item>
                  <List.Item as="a">Follow us</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Banana Pre-Order</List.Item>
                  <List.Item as="a">DNA FAQ</List.Item>
                  <List.Item as="a">How To Access</List.Item>
                  <List.Item as="a">Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Footer Header
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </ResponsiveContainer>
  );
};

export default Homepage;
