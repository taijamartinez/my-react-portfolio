import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css"; // Ensure CSS is imported
import profilePic from "../assets/taija.jpg"; // Import your profile image

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <Card className="about-me-card">
        <Card.Header>
          <h2>About Me</h2>
        </Card.Header>
        <Card.Body>
          <img src={profilePic} alt="Taija Martinez" className="profile-pic" />
          <Card.Title>Taija Martinez | Full-Stack Developer</Card.Title>
          <Card.Text>
          Hi, I'm Taija Martinez, a passionate Full-Stack Developer ready to make my mark in the industry.<br /> <br />My journey into coding started with a 
          curiosity for building websites, <br />which quickly turned into a love for creating engaging, dynamic applications.
          <p>
            <br />
            I specialize in JavaScript, React, TypeScript, Node.js, and I love developing
             responsive, user-friendly web applications. I’m also skilled in
            HTML, CSS, Bootstrap and GitHub.
          </p>
          <p>
            When I’m not coding, you can find me singing, playing board games with my family, <br />traveling or experimenting with creative design.<br /><br />
            I love finding ways to blend technology and creativity,<br />and I’m always excited to take on new challenges!
          </p>
          </Card.Text>
          <Button variant="primary" href="/portfolio">
            View My Work
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">Let’s build something great together!</Card.Footer>
      </Card>
    </div>
  );
}
