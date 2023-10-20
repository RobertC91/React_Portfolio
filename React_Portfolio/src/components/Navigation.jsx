import { Link, useLocation } from 'react-router-dom'

function Nav() {
  
  return (
    <nav>
      {/* as="button" */}
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About Me
          </Link>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
            Projects
          </Link>
          <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>
            Resume
          </Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>

  </nav>
  );
}

export default Nav;
