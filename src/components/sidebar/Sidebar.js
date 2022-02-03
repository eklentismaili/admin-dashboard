import { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar(props) {
  const [sideBar, setSidebar] = useState(false);

  function handleSideBarr() {
    setSidebar(prevState => !prevState);
    props.sendSidebarData(sideBar);
  }

  return (
    <>
      <div
        className={`sidebar-wrapper ${sideBar ? 'sidebar-wrapper-active' : ''}`}
      >
        <div className="sidebar-header">
          <button
            onClick={() => {
              handleSideBarr();
            }}
            className={`sidebar-toggle ${sideBar ? 'open-sidebar-btn' : ''}`}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
