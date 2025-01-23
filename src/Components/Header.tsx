import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { logo } from "../assets";
import { RiMenu3Fill } from "react-icons/ri";
import { Button } from "@/Components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";
const Header: React.FC = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 w-full h-[88px] z-50 border-b-[0.5px] border-gray-600 font-jakarta transition-all duration-500 ${
        isBlurred
          ? "bg-black backdrop-blur-[40px] bg-opacity-25"
          : "bg-black backdrop-blur-none bg-opacity-0"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-5 px-4 mt-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" loading="lazy" className="h-12" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-10 uppercase text-sm">
          {["Home", "PastShows", "Contact", "Reservation"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? "relative text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[5px] after:rounded after:bg-gold-500 after:transition-all after:duration-300 after:transform after:translate-y-[30px]"
                  : "relative text-white hover:text-gold-500 transition-all duration-300"
              }
              style={{ position: "relative" }}
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Reservation Button */}
        <NavLink
          to="/reservation"
          className="hidden uppercase text-sm md:block bg-gold-500 px-4 py-2 text-white font-normal"
        >
          Reservation
        </NavLink>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-transparent text-9xl">
                <RiMenu3Fill size={50} />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[320px] capitalize text-lg font-restora_thin font-semibold bg-main_black text-white border-none">
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <div className="bg-main_black backdrop-blur-md py-3 mt-4 flex flex-col space-y-2">
                {["Home", "PastShows", "Contact", "Reservation"].map((item) => (
                  <NavLink
                    key={item}
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      isActive ? "text-gold-500" : "hover:text-gray-300 py-2"
                    }
                  >
                    {item}
                  </NavLink>
                ))}
              </div>
              <SheetFooter>
                <Link
                  to="/reservation"
                  className="uppercase text-sm text-center md:block bg-gold-500 px-4 py-3 mt-4 text-white font-normal"
                >
                  Reservation
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
