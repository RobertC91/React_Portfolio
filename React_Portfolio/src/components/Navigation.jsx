import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const linkStyle = { border: '1px black', padding: '5px', };
  return (
    <nav className="main-header-menu">
    <section
      style={{
        display: 'flex',
        fontFamily: 'helvetica',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}
    >
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About Me
          </Link>
          <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>
            Portfolio
          </Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
          <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>
            Resume
          </Link>
    </section>
  </nav>
  );
}

export default Nav;
