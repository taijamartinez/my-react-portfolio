import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css"; // Ensure CSS is imported

// Skill lists with links
const frontEndSkills = [
  { name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React", link: "https://react.dev/" },
  { name: "TypeScript", link: "https://www.typescriptlang.org/" },
  { name: "Bootstrap", link: "https://getbootstrap.com/" },
  { name: "Responsive Design", link: "https://www.w3schools.com/css/css_rwd_intro.asp" }
];

const backEndSkills = [
  { name: "Node.js", link: "https://nodejs.org/" },
  { name: "Express.js", link: "https://expressjs.com/" },
  { name: "SQL & PostgreSQL", link: "https://www.postgresql.org/" }
];

const tools = [
  { name: "GitHub", link: "https://github.com/" },
  { name: "VS Code", link: "https://code.visualstudio.com/" },
  { name: "Insomnia", link: "https://insomnia.rest/" },
  { name: "Render", link: "https://render.com/" }
];

// Reusable component for listing skills
function SkillList({ title, skills }) {
  return (
    <>
      <h3 className="proficiency-title">{title}</h3>
      <ul className="proficiency-list">
        {skills.map((skill, index) => (
          <li key={index}>
            <a href={skill.link} target="_blank" rel="noopener noreferrer" className="skill-link">
              {skill.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

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
              href="https://docs.google.com/document/d/1AqW_1Dpiq5uR33hxi1ASP9lzbJbkAC5sON37OLFqVsU/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="resume-download"
            >
              resume
            </a>
          </p>

          {/* Proficiency Sections */}
          <SkillList title="Front-end Proficiencies" skills={frontEndSkills} />
          <SkillList title="Back-end Proficiencies" skills={backEndSkills} />
          <SkillList title="Tools and Technologies" skills={tools} />
        </Col>
      </Row>
    </Container>
  );
}
