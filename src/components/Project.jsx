// Importing photos for projects
import Pennywise from "../assets/Pennywise Planner.png";
import Jate from "../assets/JATE challenge.png";
import Social from "../assets/NoSql_1.png";
import ECommerce from "../assets/E Commerce.png";
import StaffStash from "../assets/Staff Stash.png";
import TakeNote from "../assets/Take_Note.png";
import EzShop from "../assets/EZ-Shop.png";

function Projects() {
  // Create project array with objects that hold project information
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
      liveDemoLink:
        "https://fathomless-harbor-85925-77327c487fa5.herokuapp.com/login",
      screenshot: Pennywise,
    },
    {
      title: "Social Network API",
      description:
        "This is a backend API for managing mock social media objects. It uses Express.js for routing, MongoDB database, and Mongoose ODM. It has CRUD methods for users, thoughts, reactions, and friends. There is no live deployment as it is a backend project, however a link to the YouTube walkthrough I created will show it's utilization.",
      githubLink:
        "https://github.com/RobertC91/Social-Network-API-Challenge.git",
      liveDemoLink: "https://youtu.be/WKuVHWft8Qc",
      screenshot: Social,
    },
    {
      title: "E-Commerce Backend",
      description:
        "This is an E-Commerce database manager that runs using SQL, Express, Sequelize, and JavaScript. It can add, delete, and update product information.",
      githubLink: "https://github.com/RobertC91/E-Commerce.git",
      liveDemoLink: "https://youtu.be/93UCtWCAGXw",
      screenshot: ECommerce,
    },
    {
      title: "Staff Stash",
      description:
        "This is a server side api that stores employee information using SQL. You can view different employees, roles, and departments in your business by running this in an integrated terminal.",
      githubLink: "https://github.com/RobertC91/Staff-Stash.git",
      liveDemoLink: "https://youtu.be/3i1ZXYrA54I",
      screenshot: StaffStash,
    },
    {
      title: "Take Note",
      description:
        "This is an app that saves personal notes for you. This app runs with Express.js in the back end and builds api that saves and retrieves your notes that are stored in json format in the database. You can also easily manage your note list by deleting messages from the database from the web page.",
      githubLink: "https://github.com/RobertC91/Take-Note.git",
      liveDemoLink: "https://dry-sea-56833-cb76eedf7782.herokuapp.com/",
      screenshot: TakeNote,
    },
    {
      title: "EZ-Shop",
      description: "This is an e-commerce website that my team build as our final project in bootcamp. It is a full stack application that uses React.js, Apollo, GraphQL, MongoDB, and Node.js. It is a fully functional e-commerce website that allows users to create an account, add items to their cart, and checkout. It also has a search bar that allows users to search for items by name.",
      githubLink: "https://github.com/SeanDRowan/EZ-shop.git",
      liveDemoLink: "https://shop-ez-015c83fa6fdb.herokuapp.com/",
      screenshot: EzShop,
    },
  ];

  return (
    // Render projects section with project information
    <section id="projects" className="projects">
      <div className="project-container">
        <h1>Projects</h1>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h4>
                {project.title}:
                <a
                  className="github-link btn btn-dark"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click to View Repository
                </a>
              </h4>
              <a
                className="live-demo-link"
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5>Click for Live Demo</h5>
                <img src={project.screenshot} alt={project.title} />
              </a>
              <h5>Description</h5>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
