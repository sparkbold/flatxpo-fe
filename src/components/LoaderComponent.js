import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const LoaderComponent = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <Segment>
        <Dimmer active>
          <Loader />
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    );
  }
  // Render nothing if no children present
  return children ? children : null;
};

export default LoaderComponent;

// const styles = {
//   refreshStyle: {
//     position: "relative",
//     display: "block",
//     margin: "0 auto"
//   }
// };
// <RefreshIndicator
//   style={styles.refreshStyle}
//   top={0}
//   left={0}
//   size={80}
//   status={'loading'}
// />
