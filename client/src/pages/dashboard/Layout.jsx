import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
const Layout = () => {
  return (
    <div className=" bg-base-300">
      <main>
        <div>
          <Navbar />
          <div>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
