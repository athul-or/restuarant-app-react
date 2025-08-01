import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
  return (
    <Navbar expand="lg" className="modern-navbar fixed-top">
      <Container>
        <Navbar.Brand href="#" className="fw-bold text-white fs-3">
          🍽 Flavor Haven
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-white" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/" className="nav-link-modern">
              Home
            </Nav.Link>
            <Nav.Link href="#menu" className="nav-link-modern">
              Menu
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link-modern">
              About
            </Nav.Link>
            <NavDropdown
              title="More"
              id="navbarScrollingDropdown"
              menuVariant="dark"
              className="nav-link-modern"
            >
              <NavDropdown.Item href="#gallery">Gallery</NavDropdown.Item>
              <NavDropdown.Item href="#events">Events</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex modern-search">
            <Form.Control
              type="search"
              placeholder="Search Dishes..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning" className="text-white px-4">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
