import { Calendar } from "lucide-react";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";

const AccountSettings = () => {
  const handleLogout = () => {
    console.log("Logging out...");
  };


  return (
    <div className="h-fit md:h-[100vh] flex justify-center bg-main_black text-white mt-24 sm:mt-32 p-4 sm:p-8 transition-all duration-1000">
      <div className="w-full max-w-7xl">
        {/* Heading */}
        <h1 className="text-2xl sm:text-2xl md:text-4xl font-restora_light font-light mb-2 text-center md:text-left">
          ACCOUNT SETTING
        </h1>
        <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-12 text-center md:text-left font-restora_light">
          Ensure Your Information Is Accurate For A Seamless Experience.
        </p>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row gap-16">
          {/* Sidebar */}
          <div className="flex flex-col space-y-2 md:space-y-3 border-b md:border-b-0 md:border-r-[1px] border-gray-500 w-full md:w-[400px] h-full md:h-[375px]">
            <NavLink
              to="/account/details"
              className={({ isActive }) =>
                `p-4 sm:p-6 cursor-pointer flex flex-col ${
                  isActive
                    ? "bg-[#2F2C29] text-gold-500 border-l-4 md:border-l-0 md:border-r-4 border-gold-500"
                    : "text-white"
                }`
              }
            >
              <div className="flex items-center gap-3">
                <IoSettingsOutline className="w-6 sm:w-8 h-6 sm:h-8" />
                <span className="text-base sm:text-lg md:text-2xl font-restora_light">
                  Account Details
                </span>
              </div>
              <p className="text-xs sm:text-sm ml-9 mt-2 text-neutral-500 hidden sm:block">
                Update Your Personal Detail To Keep Your Account Up To Date.
              </p>
            </NavLink>

            <NavLink
              to="/account/booking"
              className={({ isActive }) =>
                `p-4 sm:p-6 cursor-pointer flex flex-col ${
                  isActive
                    ? "bg-[#2F2C29] text-gold-500 border-l-4 md:border-l-0 md:border-r-4 border-gold-500"
                    : "text-white"
                }`
              }
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-6 sm:w-8 h-6 sm:h-8" />
                <span className="text-base sm:text-lg md:text-2xl font-restora_light">
                  My Booking
                </span>
              </div>
              <p className="text-xs sm:text-sm ml-9 mt-2 text-neutral-500 hidden sm:block">
                View, Modify, Or Cancel Your Upcoming Reservations.
              </p>
            </NavLink>

            <button
              onClick={handleLogout}
              className="w-full p-4 sm:p-6 hover:bg-[#2F2C29] transition-colors flex flex-col"
            >
              <div className="flex items-center gap-3">
                <TbLogout2 className="w-6 sm:w-8 h-6 sm:h-8 text-gold-500" />
                <span className="text-base sm:text-lg md:text-2xl font-restora_light text-gold-500">
                  Log Out
                </span>
              </div>
              <p className="text-xs sm:text-sm ml-9 mt-2 text-neutral-500 hidden sm:block">
                Securely Log Out And Come Back When You're Ready.
              </p>
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1 w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
