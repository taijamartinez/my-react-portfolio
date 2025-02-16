import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Import NavLink from React Router
import "../App.css"; // Ensure CSS is imported

export default function NavLinks() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container fluid>  {/* Use "fluid" to make it full-width */}
        <Navbar.Brand href="/">Taija Martinez | Full-Stack Developer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <nav className="ms-auto navbar-nav">
            <NavLink to="/" className="nav-link">About Me</NavLink>
            <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
            <NavLink to="/resume" className="nav-link">Resume</NavLink>
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

