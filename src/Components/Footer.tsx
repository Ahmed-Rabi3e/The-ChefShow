import { logo } from "@/assets";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer: React.FC = () => {
  return (
    <footer className="bg-main_black text-white py-12 px-6 md:px-16 pb-36 rounded- relative">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start space-y-6 md:w-1/3">
          {/* Logo and Description */}
          <div>
            <img
              src={logo}
              loading="lazy"
              alt="Logo"
              className="mb-6 h-14 mx-auto md:mx-0"
            />
            <p className="text-gray-400 text-sm max-w-sm">
              the chef show® is a female-driven, Egypt-based fashion brand,
              creating luxurious, empowering apparel for the modern woman.
              Experience elegance, confidence, and the celebration of every
              woman's unique beauty with Gumus® - where luxury meets femininity.
            </p>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 text-gray-400">
            <a
              href="#"
              className="w-16 h-16 flex items-center justify-center border border-gray-500 rounded-full hover:text-gold-500 hover:border-gold-500"
            >
              <FaFacebookF size={25} />
            </a>
            <a
              href="#"
              className="w-16 h-16 flex items-center justify-center border border-gray-500 rounded-full hover:text-gold-500 hover:border-gold-500"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="#"
              className="w-16 h-16 flex items-center justify-center border border-gray-500 rounded-full hover:text-gold-500 hover:border-gold-500"
            >
              <CiMail size={25} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 mt-8 md:-mt-32 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-normal font-restora_light leading-tight">
            Introducing Our New Fashion Collection, Where Contemporary Style
            Meets Timeless Elegance.
          </h2>
        </div>
      </div>

      {/* Decorative Border */}
      <div className="absolute top-0 left-0 w-full h-full rounded-[140px] border-t border-gold-500 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
