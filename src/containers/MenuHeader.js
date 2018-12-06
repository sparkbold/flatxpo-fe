import React, { Component } from "react";
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility
} from "semantic-ui-react";
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

class MenuHeader extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children, history } = this.props;
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
              <Menu.Item as="a" active onClick={() => history.push("/")}>
                Home
              </Menu.Item>
              <Menu.Item as="a" onClick={this.props.onClickAll}>
                All
              </Menu.Item>
              <Menu.Item as="a" onClick={this.props.onClickBusiness}>
                Business
              </Menu.Item>
              <Menu.Item as="a" onClick={this.props.onClickEducation}>
                Education
              </Menu.Item>
              <Menu.Item as="a" onClick={this.props.onClickProductivity}>
                Productivity
              </Menu.Item>
              <Menu.Item as="a" onClick={this.props.onClickGames}>
                Games
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
            </Container>
          </Menu>
          {children}
        </Segment>
      </Visibility>
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
export default connect(
  null,
  mapDispatchToProps
)(MenuHeader);
