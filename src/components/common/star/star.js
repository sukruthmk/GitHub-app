import React from "react";

import Solid from './solid';
import Regular from './regular';

class Star extends React.PureComponent {
  render() {
    const { addStar, starred, removeStar } = this.props;
    return (
      <React.Fragment>
        {starred ? (
          <Solid
            onClick={() => {
              removeStar();
            }}
          />
        ) : (
          <Regular
            onClick={() => {
              addStar();
            }}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Star;
