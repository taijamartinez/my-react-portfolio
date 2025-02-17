import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css"; // Ensure CSS is imported

export default function Resume() {
  return (
    <Container className="resume-container">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h1 className="resume-heading text-center">Resume</h1>

          {/* Download Resume Link */}
          <p className="text-center">
            <strong>Download my</strong>{" "}
            <a
              href="https://docs.google.com/document/d/1AqW_1Dpiq5uR33hxi1ASP9lzbJbkAC5sON37OLFqVsU/edit?usp=sharing" // Update with your actual file path
              download="Taija-Martinez-Resume.pdf"
              className="resume-download"
            >
              resume
            </a>
          </p>

          {/* Front-end Proficiencies */}
          <h3 className="proficiency-title">Front-end Proficiencies</h3>
          <ul className="proficiency-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Bootstrap</li>
            <li>Responsive Design</li>
          </ul>

          {/* Back-end Proficiencies */}
          <h3 className="proficiency-title">Back-end Proficiencies</h3>
          <ul className="proficiency-list">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>SQL & PostgreSQL</li>
          </ul>

          {/* Tools and Technologies*/}
          <h3 className="proficiency-title">Tools and Technologies</h3>
          <ul className="proficiency-list">
            <li>GitHub</li>
            <li>VS Code</li>
            <li>Insomnia</li>
            <li>Render</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
