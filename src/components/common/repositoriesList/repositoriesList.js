import React from "react";
import styled from "styled-components";

import Star from "../star/star";

const StyledUl = styled.ul`
  maxwidth: 900;
  margin: 0 auto;
  liststyle: none;
  paddingleft: 18;
  paddingright: 18;
`;
const StyledP = styled.p`
  width: 75%;
`;
const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  padding-bottom: 24px;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  @media (min-width: 426px) {
    flex-direction: row;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

class RepositoriesList extends React.Component {
  render() {
    const { repositories, addStar, removeStar } = this.props;
    return (
      <StyledUl>
        {repositories.map(
          ({ nameWithOwner, id, descriptionHTML, url, viewerHasStarred }) => (
            <StyledLi key={id}>
              <StyledDiv>
                <h3>
                  <a href={url}>{nameWithOwner}</a>
                </h3>
                <StyledP
                  dangerouslySetInnerHTML={{ __html: descriptionHTML }}
                />
              </StyledDiv>
              <Star
                starred={viewerHasStarred}
                addStar={() => addStar(id)}
                removeStar={() => removeStar(id)}
              />
            </StyledLi>
          )
        )}
      </StyledUl>
    );
  }
}

export default RepositoriesList;
