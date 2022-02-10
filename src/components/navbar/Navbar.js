import { Link } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import Locale from '../locale/Locale';
import Avatar from '../../assets/images/icons/profile.png';
import Logo from '../../assets/images/logo.gif';

function Navbar({ sideBar, parentCallbackNav }) {
  const auth = useAuth();

  function handleSidebar() {
    parentCallbackNav(!sideBar);
  }

  function logOut() {
    localStorage.setItem('token', '');
    auth.logout(localStorage.getItem('token'));
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
              <Link to="/">
                <img src={Logo} />
              </Link>
            </div>
          </div>

          <div className="right-nav">
            <div className="locale">
              <Locale />
            </div>
            <div className="avatar">
              <img src={Avatar} alt="Avatar" />
            </div>
            <div className="settings">
              <button
                onClick={() => {
                  logOut();
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
