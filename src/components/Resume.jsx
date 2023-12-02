function Resume() {
  return (
    <section className="resume">
      <h1>My Resume</h1>
      <p>You can download my resume by clicking the link below:</p>
      {/* Bring in resume to open as a pdf for printing or download */}
      <a
        className="resume-link btn btn-dark"
        href="/resume/RobertCoulsonResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
      {/* On-site resume information */}
      <section className="resume-info">
        <h4>Personal</h4>
        <div className="information-card">
          <p>Robert Michael Coulson</p>
          <p>8119 Silver Hampton</p>
          <p>San Antonio, TX 78254</p>
          <p>Phone Number: (210) 380-9301</p>
          <p>Email Address: robertcoulson91@gmail.com</p>
        </div>

        <h4>Objective</h4>
        <p>
          Dedicated Full Stack Web Developer with a passion for creating and
          implementing innovative web solutions. Seeking to leverage my
          technical expertise and problem-solving skills to contribute to a
          dynamic team and deliver high-quality web applications.
        </p>

        <h4>Summary of Qualifications</h4>
        <ul>
          <li>
            Proficient in both front-end and back-end development technologies,
            including HTML, CSS, JavaScript, React, Node.js.
          </li>
          <li>
            Experience in designing and developing responsive, user-friendly web
            applications and websites.
          </li>
          <li>
            Strong understanding of database management, with experience in SQL
            and NoSQL databases.
          </li>
          <li>
            Exceptional problem-solving abilities and attention to detail.
          </li>
          <li>
            Excellent communication skills and a collaborative team player.
          </li>
        </ul>

        <h4>Skills</h4>
        <ul>
          <li>Front-end Technologies: HTML, CSS, JavaScript, React</li>
          <li>Back-end Technologies: Node.js, Express, MERN Stack</li>
          <li>Databases: MongoDB, SQL</li>
          <li>Version Control: Git, GitHub</li>
          <li>Tools: Visual Studio Code, Heroku, Mongoose</li>
          <li>
            RESTful API design, responsive web design, cross-browser
            compatibility, UI/UX design principles
          </li>
        </ul>

        <h4>Professional Experience</h4>
        <div className="information-card">
          <p>Del Ops Driver (CDL) - HEB</p>
          <p>San Antonio, TX</p>
          <p>January 2022 - Present</p>
        </div>
        <div className="information-card">
          <p>OTR Driver (CDL) - Schneider National</p>
          <p>Dallas, TX</p>
          <p>2012 - 2021</p>
        </div>

        
        <h4>Education</h4>
        <div className="information-card">
          <p>High School Diploma</p>
          <p>John Paul Stevens High School</p>
          <p>San Antonio, TX</p>
        </div>
        <div className="information-card">
          <p>Coding Bootcamp Certification</p>
          <p>University of Texas San Antonio</p>
          <p>San Antonio, TX</p>
        </div>
      </section>
    </section>
  );
}

export default Resume;
