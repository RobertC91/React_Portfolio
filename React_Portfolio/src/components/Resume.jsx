function Resume() {
  return (
    <section className="resume">
      <h2>My Resume</h2>
      <p>
        You can download my resume by clicking the link below:
        <a href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
      </p>
      <h3>Proficiencies</h3>
      <ul>
        <li>Front-end Development: HTML, CSS, JavaScript, React</li>
        <li>Back-end Development: Node.js, Express</li>
        <li>Database: MongoDB, SQL</li>
        <li>Version Control: Git, GitHub</li>
        <li>Other Tools: Visual Studio Code, Postman, Figma</li>
      </ul>
    </section>
  );
}

export default Resume;
