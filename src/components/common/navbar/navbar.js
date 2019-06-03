import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

import Profile from "../profile/profile";

const StyledSpan = styled.span`
  margin-left: 15px;
`;

function NavBar() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Navbar.Brand to="/">GitKoj</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/starred">Starred</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/logout">
          <Profile />
          <StyledSpan>Logout</StyledSpan>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
