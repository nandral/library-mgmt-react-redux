import React from "react";
import { Link } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header className="app-header">
    <Link to="/" className="logo" />
    <nav className="nav">
      <Link to="/books" className="nav-link">
        Books
      </Link>
      <Link to="/register" className="nav-link">
        Register
      </Link>
    </nav>
  </header>
);

export default Header;
