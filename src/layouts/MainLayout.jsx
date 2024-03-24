import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Nav />
      </div>
      <Outlet />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
