import React from "react";
import Pennywise from "../assets/Pennywise Planner.png";
import Jate from "../assets/Jate challenge.png"
import Social from "../assets/NoSql_1.png"

function Projects() {
  const projects = [
    {
      title: "PWA Text Editor",
      description:
        "This is a text editor that runs in the browser, but can also be installed and used offline. This app is a single-page application that meets PWA criteria. In addition it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. Once you go back online, the cache will update with data that was stored while you were offline.",
      githubLink: "https://github.com/RobertC91/PWA-Text-Editor-Challenge",
      liveDemoLink: "https://secure-hamlet-10040-6babeb9d1107.herokuapp.com/",
      screenshot: Jate,
    },
    {
      title: "Pennywise Planner",
      description: `This is an expense tracker website. You create an account or login to access your dashboard. On the dashboard you can add expenses you have and keep track of how much you've spent and where. There is a section above the expenses that tracks the total amount of all your expenses. In the future I would like to implement a photo upload system to electronically store receipts as well as graphs to track the types of expenses you have and display them. I also would like to implement categories for your expenses.`,
      githubLink: "https://github.com/RobertC91/Pennywise_Planner",
      liveDemoLink: "https://fathomless-harbor-85925-77327c487fa5.herokuapp.com/login",
      screenshot: Pennywise,
    },
    {
      title: "Social Network API",
      description: "This is a backend API for managing mock social media objects. It uses Express.js for routing, MongoDB database, and Mongoose ODM. It has CRUD methods for users, thoughts, reactions, and friends. There is no live deployment as it is a backend project, however a link to the YouTube walkthrough I created will show it's utilization.",
      githubLink: "https://github.com/RobertC91/Social-Network-API-Challenge.git",
      liveDemoLink: "https://youtu.be/WKuVHWft8Qc",
      screenshot: Social
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>
                {project.title}
                <a
                  className="github-link"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </h3>

              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={project.screenshot} alt={project.title} />
              </a>

              <p>{project.description}</p>
              <div className="project-links"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
