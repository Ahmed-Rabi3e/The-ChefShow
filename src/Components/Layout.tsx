import React from "react";
import { Outlet } from "react-router-dom";
import Curve from "./transition/Curve"; // Import Curve component
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  hideHeader?: boolean;
  hideFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ hideHeader, hideFooter }) => {
  return (
    <Curve>
      <div className="flex flex-col min-h-screen bg-main_black text-white">
        {!hideHeader && <Header />}

        <main className="flex-grow">
          <Outlet />
        </main>

        {!hideFooter && <Footer />}
      </div>
    </Curve>
  );
};

export default Layout;
