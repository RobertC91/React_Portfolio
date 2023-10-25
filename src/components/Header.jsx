// Import Nav component for use in Header component
import Nav from "./Navigation";

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1 className="navbar-brand">Robert Coulson</h1>
      <Nav />
    </header>
  );
}

export default Header
