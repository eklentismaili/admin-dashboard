import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Main from '../components/main/Main';

export default function App() {
  const [sidebarState, setSidebarState] = useState(false);

  function getStateOfSidebar(val) {
    setSidebarState(prevState => !prevState);
  }

  return (
    <div className="app">
      <Sidebar sendSidebarData={getStateOfSidebar} />
      <Main getSidebarState={sidebarState} />
    </div>
  );
}
