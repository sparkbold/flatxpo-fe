import PropTypes from "prop-types";
import React from "react";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import DesktopContainer from "./containers/DesktopContainer";
import MobileContainer from "./containers/MobileContainer";

DesktopContainer.propTypes = {
  children: PropTypes.node
};

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children, history }) => (
  <div>
    <DesktopContainer history={history}>{children}</DesktopContainer>
    <MobileContainer history={history}>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const App = props => {
  //console.log("===AppProps===>", props);
  return (
    <ResponsiveContainer history={props.history}>
      <Container style={{ padding: " 4em 0em" }}>{props.children}</Container>
    </ResponsiveContainer>
  );
};

export default App;
