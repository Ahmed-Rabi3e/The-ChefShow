import { map } from "@/assets";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Succusfull = () => {
  return (
    <div className="min-h-screen flex flex-col items-center mt-32">
      <div className="border border-gold-500 p-4 h-16 w-16 flex items-center justify-center rounded-full">
        <FaCheck className="text-gold-500 text-3xl" />
      </div>
      <h1 className="my-6 text-center leading-tight text-3xl md:text-5xl font-restora_light uppercase max-w-3xl">
        BOOKING SUCCESSFULLY placed It will be sent to your email
      </h1>
      <div className="flex items-center gap-8 my-1">
        <h2 className="text-base uppercase">Booking Reference</h2>
        <p className="text-gray-400">CHEF-BOOK-67389285</p>
      </div>
      <div className="flex items-center gap-8 my-1">
        <h2 className="text-base uppercase">Booking Date</h2>
        <p className="text-gray-400">Jan 1, 2025 00:00:00</p>
      </div>
      <div className="flex items-center gap-8 my-1">
        <h2 className="text-base uppercase">Number of Seats</h2>
        <p className="text-gray-400">11</p>
      </div>
      <Link to="/" className="bg-gold-500 px-10 py-3 mt-6">
        BACK TO HOME
      </Link>
      <img src={map} alt="map" loading="lazy" className="my-20" />
    </div>
  );
};

export default Succusfull;
