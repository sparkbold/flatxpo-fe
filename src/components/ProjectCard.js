import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

// These are inline styles
// You can pass styles as objects using this convention
const styles = {
  cardHeader: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden"
  },
  cardImage: {
    maxHeight: 394,
    overflow: "hidden"
  },
  card: {
    cursor: "pointer",
    height: 400,
    overflow: "hidden"
  },
  bgImage: {
    width: "100%"
  }
};

class ProjectCardComponent extends React.Component {
  constructor(props) {
    super(props);
    // Track if the mouse hovering over the project card
    this.state = {
      isMouseOver: false
    };
  }

  render() {
    const { project, openProjectModal } = this.props;
    // The subtitle won't render if it's null
    const subtitle = this.state.isMouseOver ? project.overview : null;

    return (
      <Card
        style={styles.card}
        onMouseOver={() => this.setState({ isMouseOver: true })}
        onMouseLeave={() => this.setState({ isMouseOver: false })}
      >
        <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
        <Card.Content>
          <Card.Header>{project.title}</Card.Header>
          <Card.Meta />
          <Card.Meta>
            <span className="date">Created in 2018</span>
          </Card.Meta>
          <Card.Description>{project.description}</Card.Description>
        </Card.Content>

        <Card.Content extra>
          <a class="right floated">
            <Icon name="heart" />
            22 Likes
          </a>
          <a>
            <Icon name="comment" />5 comments
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default ProjectCardComponent;
