import PropTypes from "prop-types";
import React from "react";
import {
  Container,
  Grid,
  Header,
  Image,
  List,
  Segment
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import HomepageHeading from "./components/HomepageHeading";
import DesktopContainer from "./containers/DesktopContainer";
import MobileContainer from "./containers/MobileContainer";

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
  console.log("===AppProps===>", props);
  return (
    <ResponsiveContainer history={props.history}>
      <Container style={{ padding: " 8em 0em" }}>{props.children}</Container>
    </ResponsiveContainer>
  );
};

export default App;
