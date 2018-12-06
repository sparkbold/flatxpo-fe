import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { addVote } from "../actions/projectActions";

class ProjectCardComponent extends React.Component {
  constructor(props) {
    super(props);
    // Track if the mouse hovering over the project card
    this.state = {
      isMouseOver: false
    };
  }
  handleClick = (e, id) => {
    e.preventDefault();
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
          src={project.img_url ? project.img_url : project.image}
          onClick={e => this.handleClick(e, project.id)}
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
              this.props.onAddVote(project.id);
              console.log("====>ClickVote");
            }}
          >
            <Icon name="thumbs up" />
            {project.votes.length} Likes
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
const mapDispatchToProps = {
  onAddVote: addVote
};

export default connect(
  null,
  mapDispatchToProps
)(ProjectCardComponent);
