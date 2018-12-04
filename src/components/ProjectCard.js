import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
// import { connect } from "react-redux";
// import { loadProjectDetails } from "../actions/projectActions";

class ProjectCardComponent extends React.Component {
  constructor(props) {
    super(props);
    // Track if the mouse hovering over the project card
    this.state = {
      isMouseOver: false
    };
  }
  handleClick = id => {
    console.log("projectID", id);
    this.props.history.push(`/projects/${id}`);
  };
  render() {
    const { project } = this.props;
    // The subtitle won't render if it's null
    const subtitle = this.state.isMouseOver ? project.description : null;

    return (
      <Card
        onMouseOver={() =>
          this.setState({
            isMouseOver: true
          })
        }
        onMouseLeave={() => this.setState({ isMouseOver: false })}
      >
        <Image
          src={require(`../assets/wireframe/boolean-icing.png`)}
          onClick={() => this.handleClick(project.id)}
        />
        <Card.Content>
          <Card.Header>{project.title}</Card.Header>
          <Card.Meta>
            <span className="date">{project.created_at}</span>
          </Card.Meta>
          <Card.Description>{subtitle}</Card.Description>
        </Card.Content>

        <Card.Content extra>
          {/* eslint-disable-next-line */}
          <a
            className="right floated"
            href="#"
            onClick={e => {
              e.preventDefault();
              console.log("====>ClickVote");
            }}
          >
            <Icon name="thumbs up" />
            {project.vote_count} Likes
          </a>
          {/* eslint-disable-next-line */}
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              console.log("====>ClickView");
            }}
          >
            <Icon name="eye" />
            {project.views} views
          </a>
        </Card.Content>

        <Card.Content extra>
          {/* eslint-disable-next-line */}
          <a
            className="right floated"
            href={project.demo_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="heart" />
            Demo
          </a>
          {/* eslint-disable-next-line */}
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              console.log("====>ClickComment");
            }}
          >
            <Icon name="comment" />
            {project.comment_count} comments
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default ProjectCardComponent;
