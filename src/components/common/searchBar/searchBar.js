import React from "react";
import styled from "styled-components";
import { InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  align-items: center;
  display: flex;
`;
const Content = styled.div`
  margin: auto;
`;

class SearchBar extends React.Component {
  render() {
    const { onChange, search } = this.props;
    return (
      <Container>
        <Content>
          <InputGroup className="mb-3">
            <FormControl
              name="search"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={onChange}
              value={search}
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2">
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Content>
      </Container>
    );
  }
}

export default SearchBar;
