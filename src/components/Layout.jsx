import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = () => {
  return (
    <div className="bg-base-300">
      <main>
        <div>
          <Navbar />

          <Footer />
          <div>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
