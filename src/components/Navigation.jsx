import { Link } from 'react-router-dom'

function Nav() {
  
  return (
    <nav className='ms-auto'>
      {/* Link pages for the navbar in the header */}
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About Me
          </Link>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
            Projects
          </Link>
          <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>
            Resume
          </Link>

  </nav>
  );
}

export default Nav;
