import { RiFileList2Line } from "react-icons/ri";
import { Calendar } from "lucide-react";
import { FiUser } from "react-icons/fi";
import { motion } from "framer-motion";

export default function MyBooking() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between mb-8">
        <div className="relative text-4xl font-restora_light pb-2">
          My Bookings
          <div className="h-[1px] w-[131px] bg-gold-500 absolute bottom-0" />
        </div>
        <div className="flex items-center gap-4 border font-jakarta border-gold-500 p-1">
          <button className="bg-gold-500 p-4">ACTIVE BOOKING</button>
          <button className="bg-main_black p-4">PAST BOOKING</button>
        </div>
      </div>

      <div className="">
        <div className="bg-main_black border border-gold-500 p-6">
          <div className="mb-8">
            <h3 className="text-2xl font-restora_light text-white mb-2">
              THE BBQ SHOW SEASON 2
            </h3>
          </div>
          <div className="flex justify-center gap-5 mb-2 font-jakarta">
            <div className="border border-gold-500 flex flex-col justify-center items-center w-[210px] h-[106px]">
              <RiFileList2Line className="w-6 h-6 text-gold-500 mb-2" />
              <p className="text-white text-sm">BOOKING REFERENCE</p>
              <p className="text-neutral-400 text-xs mt-1">
                CHEF-BOOK-67389285
              </p>
            </div>
            <div className="border border-gold-500 flex flex-col justify-center items-center w-[210px] h-[106px]">
              <Calendar className="w-6 h-6 text-gold-500 mb-2" />
              <p className="text-white text-sm">BOOKING DATE</p>
              <p className="text-neutral-400 text-xs mt-1">Jan 1, 2025</p>
            </div>
            <div className="border border-gold-500 flex flex-col justify-center items-center w-[210px] h-[106px]">
              <FiUser className="w-6 h-6 text-gold-500 mb-2" />
              <p className="text-white text-sm">Number of Seats</p>
              <p className="text-neutral-400 text-xs mt-1">11</p>
            </div>
          </div>
        </div>
        <button className="bg-gold-500 w-full h-14 font-jakarta">
          VIEW BOOKING DETAILS
        </button>
      </div>
    </motion.div>
  );
}
