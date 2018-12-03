import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { loadProjectDetails } from "../actions/projectsList";

class ProjectCardComponent extends React.Component {
  constructor(props) {
    super(props);
    // Track if the mouse hovering over the project card
    this.state = {
      isMouseOver: false
    };
  }
  loadProjectDetails = id => {
    console.log("projectID", id);
    this.props.loadProjectDetails(id);
    this.props.history.push("/projectdetail");
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
          src={project.image}
          onClick={() => this.loadProjectDetails(project.id)}
        />
        <Card.Content>
          <Card.Header>{project.title}</Card.Header>
          <Card.Meta>
            <span className="date">{project.created_at}</span>
          </Card.Meta>
          <Card.Description>{subtitle}</Card.Description>
        </Card.Content>

        <Card.Content extra>
          <a className="right floated">
            <Icon name="thumbs up" />
            {project.vote_count} Likes
          </a>
          <a>
            <Icon name="eye" />
            {project.views} views
          </a>
        </Card.Content>

        <Card.Content extra>
          <a className="right floated" href={project.demo_url} target="_blank">
            <Icon name="heart" />
            Demo
          </a>
          <a>
            <Icon name="comment" />
            {project.comment_count} comments
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default connect(
  null,
  { loadProjectDetails: id => loadProjectDetails(id) }
)(ProjectCardComponent);
