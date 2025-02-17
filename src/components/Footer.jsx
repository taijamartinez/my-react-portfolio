import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css"; // Ensure CSS is imported

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto">
            <a href="https://github.com/taijamartinez" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
                className="footer-icon"
              />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://www.linkedin.com/in/taija-martinez-3b128a351/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=512&id=16166&format=png"
                alt="LinkedIn"
                className="footer-icon"
              />
            </a>
            </Col>
        </Row>
      </Container>
    </footer>
  );
}

