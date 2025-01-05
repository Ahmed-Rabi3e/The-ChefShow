import { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import { RiMenu3Fill } from "react-icons/ri";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-main_black backdrop-blur-2xl font-normal text-white z-50 border-b border-gold-500 font-jakarta">
      <div className="container mx-auto flex items-center justify-between gap-5 px-4 my-3">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" loading="lazy" className="h-12" />
        </div>

        <nav className="hidden md:flex space-x-10">
          {["Home", "About", "Contact", "Reservation"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? "relative text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[5px] after:rounded after:bg-gold-500 after:transition-all after:duration-300 after:transform after:translate-y-[22px]"
                  : "relative text-white hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-1 hover:after:bg-gray-300 hover:after:transition-all hover:after:duration-300 hover:after:transform hover:after:translate-y-[18px]"
              }
              style={{ position: "relative", paddingBottom: "5px" }}
            >
              {item}
            </NavLink>
          ))}
        </nav>
        <NavLink
          to="/reservation"
          className="hidden md:block bg-gold-500 px-4 py-2 text-white font-normal"
        >
          Reservation
        </NavLink>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            id="menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <RiMenu3Fill size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="bg-black/60 backdrop-blur-md px-4 py-3 flex flex-col space-y-2">
          {["Home", "About", "Experience", "Menu", "Reservation"].map(
            (item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-gold-500 border-b-2 border-gold-500 py-2"
                    : "hover:text-gray-300 py-2"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </NavLink>
            )
          )}
          <NavLink
            to="/reservation"
            className="bg-gold-500 text-white px-4 py-2 font-normal text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Reservation
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
