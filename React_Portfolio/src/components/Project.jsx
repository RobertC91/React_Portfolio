import React from 'react';

function Projects() {
//   Replace this with your actual project data
  const projects = [
    {
      title: 'PWA Text Editor',
      description: 'This is a text editor that runs in the browser, but can also be installed and used offline. This app is a single-page application that meets PWA criteria. In addition it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. Once you go back online, the cache will update with data that was stored while you were offline.',
      githubLink: 'https://github.com/RobertC91/PWA-Text-Editor-Challenge',
      liveDemoLink: 'https://secure-hamlet-10040-6babeb9d1107.herokuapp.com/',
    },
    {
      title: 'Pennywise Planner',
      description: `This is an expense tracker website. You create an account or login to access your dashboard. On the dashboard you can add expenses you have and keep track of how much you've spent and where. There is a section above the expenses that tracks the total amount of all your expenses. In the future I would like to implement a photo upload system to electronically store receipts as well as graphs to track the types of expenses you have and display them. I also would like to implement categories for your expenses.`,
      githubLink: 'https://github.com/RobertC91/Pennywise_Planner',
      liveDemoLink: 'https://git.heroku.com/fathomless-harbor-85925.git',
    },
    // Add more project objects as needed
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
