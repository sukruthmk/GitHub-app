import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class Solid extends React.PureComponent {
  render() {
    const { onClick } = this.props;
    return (
      <React.Fragment>
        <FontAwesomeIcon
          icon={faStar}
          size="lg"
          color="yellow"
          onClick={() => {
            onClick();
          }}
        />
      </React.Fragment>
    );
  }
}

export default Solid;
