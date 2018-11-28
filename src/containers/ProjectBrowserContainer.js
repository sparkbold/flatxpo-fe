import React from "react";
import {
  Button,
  Container,
  Divider,
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

class ProjectBrowserContainer extends React.Component {
  render() {
    return (
      <Grid container columns={3}>
        <Grid.Column>
          <Image src={require("../images/wireframe/boolean-icing.png")} />
        </Grid.Column>
        <Grid.Column>
          <Image src={require("../images/wireframe/boolean-icing.png")} />
        </Grid.Column>
        <Grid.Column>
          <Image src={require("../images/wireframe/boolean-icing.png")} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default ProjectBrowserContainer;
