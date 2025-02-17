import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css"; // Ensure CSS is imported

// Project Data Array
const projects = [
  {
    id: 1,
    title: "Employee Tracker",
    image: "https://dss-www-production.s3.amazonaws.com/uploads/2021/10/5-Remote-Employee-Monitoring-Mistakes-to-Avoid.png", // Replace with actual project image
    deployedLink: "https://drive.google.com/file/d/1ihQhJRWZXGhH0M9luR12biQFWjxElrS0/view",
    githubLink: "https://github.com/taijamartinez/employeeTracker",
  },
  {
    id: 2,
    title: "Weather Forecast",
    image: "https://www.woodtv.com/wp-content/uploads/sites/51/2024/09/1920x1080-Weather-Forecast-003.jpg?w=1920&h=1080&crop=1",
    deployedLink: "https://weatherforecast-rc1w.onrender.com",
    githubLink: "https://github.com/taijamartinez/weatherForecast",
  },
  {
    id: 3,
    title: "Workday Tasklist",
    image: "https://clockify.me/blog/wp-content/uploads/2021/06/start-of-workday-min.png",
    deployedLink: "https://codergeek081.github.io/Project-1/",
    githubLink: "https://github.com/Codergeek081/Project-1",
  },
  {
    id: 4,
    title: "README Generator",
    image: "https://external-preview.redd.it/bNEObvG_oAgqT83iZGoQR_vadb3Py6xbVh_Xy6vwEdM.jpg?width=1080&crop=smart&auto=webp&s=231d9008b35ce9decd9e23a42125cf88c045e9c8",
    deployedLink: "https://drive.google.com/file/d/1qwTv4GZm4e7xV3Bps4NudQ70XzP_awf5/view",
    githubLink: "https://github.com/taijamartinez/READMEgenerator",
  },
  {
    id: 5,
    title: "Vehicle Builder",
    image: "https://archive.org/download/msdos_Car_Builder_1982/msdos_Car_Builder_1982.gif",
    deployedLink: "https://drive.google.com/file/d/1aLAXeYXM9cJX9cwYWuT-0kjVNsXp6CMZ/view",
    githubLink: "https://github.com/taijamartinez/vehicle-builder",
  },
  {
    id: 6,
    title: "Landing Page",
    image: "https://img.freepik.com/premium-vector/gradient-blue-web-template-landing-page-digital-website-landing-page-design-concept-vector-illustration_532963-3385.jpg",
    deployedLink: "https://taijamartinez.github.io/miniproject1/",
    githubLink: "https://github.com/taijamartinez/miniproject1",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio-container">
      {/* Wrap the title inside a Bootstrap Card */}
      <Card className="section-card">
        <Card.Body>
          <h1 className="section-title">My Portfolio</h1>
        </Card.Body>
      </Card>

      <div className="project-grid">
        {projects.map((project) => (
          <Card key={project.id} className="project-card">
            <Card.Img variant="top" src={project.image} alt={project.title} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <div className="btn-group gap-3">
                <Button variant="dark" className="btn-custom-live rounded-pill" href={project.deployedLink} target="_blank">
                  Live Demo
                </Button>
                <Button variant="secondary" className="btn-custom-live rounded-pill" href={project.githubLink} target="_blank">
                  GitHub Repo
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}