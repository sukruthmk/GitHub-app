import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  transition: transform 0.5s;
`;

class Img extends React.PureComponent {
  static defaultProps = {
    url:
      "https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
  };
  render() {
    const { url, ...props } = this.props;
    return (
      <StyledImg
        src={url}
        width={32}
        height={32}
        alt="logo"
        {...props}
      />
    );
  }
}

export default Img;