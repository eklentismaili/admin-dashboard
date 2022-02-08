import { Link } from 'react-router-dom';

function Navbar({ sideBar, parentCallbackNav }) {
  function handleSidebar() {
    parentCallbackNav(!sideBar);
  }

  return (
    <>
      <header>
        <nav>
          <div className="left-nav">
            <div className="sidebar-btn-wrapper">
              <div
                className={`sidebar-btn ${sideBar ? 'sidebar-btn-active' : ''}`}
                onClick={handleSidebar}
              >
                <span
                  className={`btn-line ${sideBar ? 'btn-line-active' : ''}`}
                ></span>
                <span
                  className={`btn-line ${sideBar ? 'btn-line-active' : ''}`}
                ></span>
                <span
                  className={`btn-line ${sideBar ? 'btn-line-active' : ''}`}
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