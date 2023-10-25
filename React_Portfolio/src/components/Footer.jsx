import { BsGithub } from "react-icons/bs";
import { BsStackOverflow } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <footer className="d-flex align-items-center justify-content-center navbar navbar-expand-lg narbar-dark bg-dark">
        <a href="https://github.com/RobertC91" target="blank">
          <div className="footer-icon">
          <BsGithub size={30} />
          </div>
        </a>
        <a href="https://stackoverflow.com/users/22802665/rokou" target="blank">
          <div className="footer-icon">
          <BsStackOverflow size={30} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/robert-coulson-b230a4298/" target="blank">
          <div className="footer-icon">
          <BsLinkedin size={30} />
          </div>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
