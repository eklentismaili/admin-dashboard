import { useEffect } from 'react';
import Routes from '../../app/Routes';
import Navbar from '../navbar/Navbar';

function Main(props) {
  return (
    <div className={`main ${props.getSidebarState ? '' : 'main-active'}`}>
      <Navbar />
      <div className="page">
        <Routes />
      </div>
    </div>
  );
}

export default Main;
