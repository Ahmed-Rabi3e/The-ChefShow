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
      className="w-fit"
    >
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="relative text-2xl md:text-4xl font-restora_light pb-2 mb-6 md:mb-0 text-center md:text-left">
          My Bookings
          <div className="h-[1px] w-[131px] bg-gold-500 absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0" />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 border font-jakarta border-gold-500 p-1 w-full sm:w-auto">
          <button className="bg-gold-500 py-3 px-6 w-full sm:w-auto text-sm md:text-base">
            ACTIVE BOOKING
          </button>
          <button className="bg-main_black py-3 px-6 w-full sm:w-auto text-sm md:text-base">
            PAST BOOKING
          </button>
        </div>
      </div>

      {/* Booking Details */}
      <div className="bg-main_black border border-gold-500 p-6">
        <div className="mb-6">
          <h3 className="text-lg sm:text-2xl font-restora_light text-white mb-2 text-center sm:text-left">
            THE BBQ SHOW SEASON 2
          </h3>
        </div>

        {/* Booking Information */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4 font-jakarta">
          <BookingDetail
            icon={<RiFileList2Line className="w-6 h-6 text-gold-500 mb-2" />}
            label="BOOKING REFERENCE"
            value="CHEF-BOOK-67389285"
          />
          <BookingDetail
            icon={<Calendar className="w-6 h-6 text-gold-500 mb-2" />}
            label="BOOKING DATE"
            value="Jan 1, 2025"
          />
          <BookingDetail
            icon={<FiUser className="w-6 h-6 text-gold-500 mb-2" />}
            label="NUMBER OF SEATS"
            value="11"
          />
        </div>
      </div>

      <button className="bg-gold-500 w-full py-3 sm:py-4 text-sm sm:text-base font-jakarta mt-4">
        VIEW BOOKING DETAILS
      </button>
    </motion.div>
  );
}

interface BookingDetailProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const BookingDetail = ({ icon, label, value }: BookingDetailProps) => {
  return (
    <div className="border border-gold-500 flex flex-col justify-center items-center w-full sm:w-[211px] h-[100px] p-3 sm:p-4">
      {icon}
      <p className="text-white text-sm sm:text-base">{label}</p>
      <p className="text-neutral-400 text-xs sm:text-sm mt-1">{value}</p>
    </div>
  );
};
