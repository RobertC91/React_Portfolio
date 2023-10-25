import Cthulhu from "../assets/Cthulhu.png";

function About() {
  const photo = 
    {
      title: "Robert Coulson",
      photo: Cthulhu
    }
  
  return (
    <div className="about-container">
      <section className="mt-4">
        <h1>About Me</h1>
        <img className="profile-image" src= {photo.photo} alt={photo.title} />
        <section className="about-content">
          <h4>Full Stack Web Developer</h4>
          <p>
            Hello, I'm Robert Coulson, a passionate full-stack web developer
            with a strong foundation in web development and a commitment to
            creating efficient and user-friendly digital experiences. My journey
            into the world of web development began at the University of Texas
            at San Antonio's coding bootcamp, where I acquired a comprehensive
            skill set that has enabled me to tackle complex projects and deliver
            results.
          </p>
          <h4>Education and Training</h4>
          <p>
            My educational background includes completion of the coding bootcamp
            program at the University of Texas at San Antonio, where I honed my
            skills in front-end and back-end development. This intensive program
            equipped me with the knowledge and tools needed to work in the
            ever-evolving web development industry.
          </p>
          <h4>Passion and Motivation</h4>
          <p>
            I am motivated by my genuine love for problem-solving and my
            dedication to staying up-to-date with the latest trends and
            technologies in the field. I take pride in my ability to adapt to
            new challenges and find innovative solutions to create efficient,
            scalable, and maintainable web applications.
          </p>
          <h4>Collaboration and Communication</h4>
          <p>
            In addition to my technical skills, I am an excellent collaborator
            and communicator. I enjoy working in teams, and I understand the
            importance of effective communication when it comes to delivering
            successful projects. I am a firm believer in the power of teamwork
            and open dialogue.
          </p>
          <h4>Let's Connect</h4>
          <p>
            I am always excited to connect with fellow developers, potential
            collaborators, and anyone interested in the world of web
            development. If you have a project in mind, want to discuss the
            latest industry trends, or simply want to connect, please don't
            hesitate to reach out. Let's create great things together!
          </p>
        </section>
      </section>
    </div>
  );
}

export default About;
