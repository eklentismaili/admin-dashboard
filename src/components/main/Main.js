import { useEffect } from 'react';
import Routes from '../../app/Routes';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

function Main(props) {
  return (
    <div className={`main ${props.getSidebarState ? '' : 'main-active'}`}>
      <Navbar />
      <section className="page">
        <Routes />
      </section>
      <Footer />
    </div>
  );
}

export default Main;
