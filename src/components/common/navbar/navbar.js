import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Navbar.Brand to="/">GitKoj</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/starred">Starred</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/logout">Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
