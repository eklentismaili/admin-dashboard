import { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import Overlay from '../overlay/Overlay';
import Routes from '../../app/Routes';
import Footer from '../footer/Footer';

function Layout() {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  function handleCallbackNav(value) {
    setSidebarStatus(value);
  }

  function handleCallbackSidebar(val) {
    setSidebarStatus(val);
  }

  return (
    <>
      <Navbar sideBar={sidebarStatus} parentCallbackNav={handleCallbackNav} />
      <Sidebar
        sideBar={sidebarStatus}
        parentCallbackSidebar={handleCallbackSidebar}
      />
      {sidebarStatus ? <Overlay /> : ''}
      <Routes />
      <Footer />
    </>
  );
}

export default Layout;
