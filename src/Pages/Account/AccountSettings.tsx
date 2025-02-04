import { Calendar } from "lucide-react";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";

const AccountSettings = () => {
  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="h-[70vh] flex justify-center bg-main_black text-white mt-28 p-8 transition-all duration-1000">
      <div className="max-w-7xl">
        <h1 className="text-4xl font-restora_light font-light mb-2">
          ACCOUNT SETTING
        </h1>
        <p className="text-gray-300 text-base mb-12 font-restora_light">
          Ensure Your Information Is Accurate For A Seamless Experience.
        </p>

        <div className="grid grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="col-span-4 h-[400px] flex flex-col space-y-4 border-r-[1px] border-gray-500">
            <NavLink
              to="/account/details"
              className={({ isActive }) =>
                `p-6 cursor-pointer ${
                  isActive
                    ? "bg-[#2F2C29] text-gold-500 border-r border-gold-500"
                    : "text-white"
                }`
              }
            >
              <div className="flex items-center gap-3 mb-2">
                <IoSettingsOutline className="w-8 h-8 " />
                <span className="text-3xl font-restora_light">
                  Account Details
                </span>
              </div>
              <p className="text-xs ml-10 mt-3 w-60 font-restora_light text-white">
                Update Your Personal Detail To Keep Your Account Up To Date.
              </p>
            </NavLink>

            <NavLink
              to="/account/booking"
              className={({ isActive }) =>
                `p-6 cursor-pointer ${
                  isActive
                    ? "bg-[#2F2C29] text-gold-500 border-r border-gold-500"
                    : "text-white"
                }`
              }
            >
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-8 h-8" />
                <span className="text-3xl font-restora_light">My Booking</span>
              </div>
              <p className="text-xs ml-10 mt-3 w-60 font-restora_light text-neutral-500">
                View, Modify, Or Cancel Your Upcoming Reservations.
              </p>
            </NavLink>

            <button
              onClick={handleLogout}
              className="w-full p-6 hover:bg-[#2F2C29] transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <TbLogout2 className="w-8 h-8 text-gold-500" />
                <span className="text-3xl font-restora_light text-gold-500">
                  Log Out
                </span>
              </div>
              <p className="text-left text-xs ml-10 mt-3 font-restora_light text-neutral-500">
                Securely Log Out And Come Back When You're Ready.
              </p>
            </button>
          </div>

          {/* Main Content */}
          <div className="col-span-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
