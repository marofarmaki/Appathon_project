import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #16bad1;
  }

  a,
  .navbar-brand,
  .navbar-nav .navlink {
    color: #5e5e5e;

    &:hover {
      color: white;
    }
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Appathon Project</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Search">Search</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Results">Results</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
