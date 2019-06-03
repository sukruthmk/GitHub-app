import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

class Regular extends React.PureComponent {
  render() {
    const { onClick } = this.props;
    return (
      <React.Fragment>
        <FontAwesomeIcon
          icon={faStar}
          size="lg"
          onClick={() => {
            onClick();
          }}
        />
      </React.Fragment>
    );
  }
}

export default Regular;
