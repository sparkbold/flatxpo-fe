import React, { Component } from "react";
import { Responsive } from "semantic-ui-react";
import MenuHeader from "./MenuHeader";

export default class DesktopContainer extends Component {
  render() {
    console.log("=====desktopcont==>", this.props.location);
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <MenuHeader>{/* <HomepageHeading /> */}</MenuHeader>
        {this.props.children}
      </Responsive>
    );
  }
}
