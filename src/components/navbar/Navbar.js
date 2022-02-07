import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  function handleSidebar() {
    setSidebar(prevState => !prevState);
  }

  return (
    <>
      <header>
        <nav>
          <div className="left-nav">
            <div className="sidebar-btn-wrapper">
              <div
                className={`sidebar-btn ${sidebar ? 'sidebar-btn-active' : ''}`}
                onClick={handleSidebar}
              >
                <span
                  className={`btn-line ${sidebar ? 'btn-line-active' : ''}`}
                ></span>
                <span
                  className={`btn-line ${sidebar ? 'btn-line-active' : ''}`}
                ></span>
                <span
                  className={`btn-line ${sidebar ? 'btn-line-active' : ''}`}
                ></span>
              </div>
            </div>
            <div className="logo">
              <Link to="/">Logo</Link>
            </div>
          </div>

          <div className="right-nav">
            <div className="locale">Lang</div>
            <div className="avatar">Avatar</div>
            <div className="settings">Settings</div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
