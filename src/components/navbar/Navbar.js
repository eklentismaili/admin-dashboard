import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <header className="header-wrapper">
        <nav className="nav">
          <Link to="/">Logo</Link>
          <ul className="nav-links">
            <li>Locale</li>
            <li>Avatar</li>
            <li>Dropdown</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
