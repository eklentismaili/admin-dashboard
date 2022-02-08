import { useRef } from 'react';
import useClickOutside from '../../utils/useClickOutside';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faInfo,
  faFileSignature,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

function Sidebar({ sideBar, parentCallbackSidebar }) {
  const modalRef = useRef();

  useClickOutside(modalRef, () => {
    if (sideBar) parentCallbackSidebar(false);
    console.log('here');
  });

  return (
    <>
      <section
        className={`sidebar-wrapper ${sideBar ? 'sidebar-wrapper-active' : ''}`}
      >
        <div className="sidebar-menu-desktop">
          <ul className="sidebar-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active-nav' : '')}
              >
                <FontAwesomeIcon icon={faHome} />
                <span className="link-text">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'active-nav' : '')}
              >
                <FontAwesomeIcon icon={faInfo} />
                <span className="link-text">About</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'active-nav' : '')}
              >
                <FontAwesomeIcon icon={faFileSignature} />
                <span className="link-text">Contact</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? 'active-nav' : '')}
              >
                <FontAwesomeIcon icon={faUsers} />
                <span className="link-text">Users</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Sidebar;
