import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

class Solid extends React.PureComponent {
  render() {
    const { onClick } = this.props;
    return (
      <React.Fragment>
        <StyledIcon icon={faStar} size="lg" onClick={onClick} />
      </React.Fragment>
    );
  }
}

export default Solid;
