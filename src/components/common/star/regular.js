import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const StyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

class Regular extends React.PureComponent {
  render() {
    const { onClick } = this.props;
    return (
      <React.Fragment>
        <StyledIcon icon={faStar} size="lg" onClick={onClick} />
      </React.Fragment>
    );
  }
}

export default Regular;
