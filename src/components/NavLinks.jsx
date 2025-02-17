import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom"; 
import "../App.css"; 

export default function NavLinks() {
  const [expanded, setExpanded] = useState(false); // Track if the navbar is open

  const handleNavClose = () => setExpanded(false); // Function to close navbar

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="custom-navbar"
      expanded={expanded} 
    >
      <Container fluid> {/* Use "fluid" to make it full-width */}
        <Navbar.Brand href="/">Taija Martinez | Full-Stack Developer</Navbar.Brand>
        {/* Toggle button with expanded state */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <nav className="ms-auto navbar-nav">
            <NavLink to="/" className="nav-link" onClick={handleNavClose}>
              About Me
            </NavLink>
            <NavLink to="/portfolio" className="nav-link" onClick={handleNavClose}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" className="nav-link" onClick={handleNavClose}>
              Contact
            </NavLink>
            <NavLink to="/resume" className="nav-link" onClick={handleNavClose}>
              Resume
            </NavLink>
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

