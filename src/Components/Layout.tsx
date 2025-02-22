import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Curve from "./transition/Curve";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  hideHeader?: boolean;
  hideFooter?: boolean;
  hideAnimation?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  hideHeader,
  hideFooter,
  hideAnimation,
}) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return !hideAnimation ? (
    <Curve>
      <div className="flex flex-col min-h-screen bg-main_black text-white">
        {!hideHeader && <Header />}

        <main className="flex-grow">
          <Outlet />
        </main>

        {!hideFooter && <Footer />}
      </div>
    </Curve>
  ) : (
    <div className="flex flex-col min-h-screen bg-main_black text-white">
      {!hideHeader && <Header />}

      <main className="flex-grow">
        <Outlet />
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
