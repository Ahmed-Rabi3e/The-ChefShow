import { landing } from "@/assets";
import { Link, useLocation } from "react-router-dom";

interface LandingProps {
  label: string;
}

const LandingPage = ({ label }: LandingProps) => {
  const location = useLocation();

  // Function to get the breadcrumb from the current location
  const getBreadcrumbs = () => {
    const paths = location.pathname.split("/").filter((path) => path);
    const breadcrumbList = [
      <span key="home">
        <Link to="/" className="text-white hover:text-gold-500 mr-2">
          Home
        </Link>
        {" > "}
      </span>,
    ];

    // Add the rest of the breadcrumb links dynamically
    paths.forEach((path, index) => {
      const pathTo = `/${paths.slice(0, index + 1).join("/")}`;
      breadcrumbList.push(
        <span key={path}>
          <Link to={pathTo} className="text-gold-500  hover:text-white ml-2">
            {path}
          </Link>
          {index < paths.length - 1 && " > "}
        </span>
      );
    });

    return breadcrumbList;
  };

  return (
    <div className="h-[415px] bg-main_black flex flex-col border-b border-gold-500 rounded-b-[120px] items-center justify-center text-white">
      {/* Transparent Image */}
      <div className="relative w-full h-full flex justify-center items-center">
        <img
          src={landing}
          alt="Landing"
          loading="lazy"
          className="hidden md:block absolute inset-0 w-full h-full object-center"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-normal font-restora_light uppercase leading-tight mb-4">
            {label}
          </h1>
          {/* Breadcrumb */}
          <div className="mt-6 text-lg text-white">
            <p className="uppercase">{getBreadcrumbs()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
