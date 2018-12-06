import React, { Component } from "react";
import { Responsive } from "semantic-ui-react";
import MenuHeader from "./MenuHeader";
import HomepageHeading from "../components/HomepageHeading";

export default class DesktopContainer extends Component {
  render() {
    const { children, history } = this.props;
    console.log(history);
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <MenuHeader history={history}>
          <HomepageHeading />
        </MenuHeader>
        {children}
      </Responsive>
    );
  }
}
