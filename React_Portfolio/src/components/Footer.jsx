import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <footer className="d-flex align-items-center justify-content-center navbar navbar-expand-lg narbar-dark bg-dark">
        <p className="navbar-text text-white">&copy; 2023 Robert Coulson</p>
        <a href="https://github.com/RobertC91" target="blank">
          <div className="footer-icon">
          <BsGithub size={30} />
          </div>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
