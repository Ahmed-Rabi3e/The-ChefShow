import { Noise_Image, small_logo } from "@/assets";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "quantity" ? parseInt(value, 10) || 0 : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-main_black px-5 md:px-10"
      style={{
        backgroundImage: `url(${Noise_Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[664px] h-fit bg-main_black border-2 border-gold-500 flex">
        {/* Left side - ResetPassword form */}
        <div className="w-full px-4 md:px-10 py-8 flex flex-col">
          <img
            src={small_logo}
            alt="smalllogo"
            loading="lazy"
            className="w-20 h-[76px] mx-auto mt-6"
          />

          {/* Form */}
          <h1 className="text-2xl md:text-[40px] font-restora_light uppercase mt-6 text-center font-bold">
            Create account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-base capitalize font-normal mb-1 text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-main_black border border-gold-500 outline-none placeholder:text-sm text-white placeholder:font-jakarta placeholder:text-gray-500"
                required
              />
            </div>

            {/* confirmpassword */}
            <div>
              <label
                htmlFor="confirmpassword"
                className="block text-base capitalize font-normal mb-1 text-white"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                placeholder="Confirm Your Password"
                value={formData.confirmpassword}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-main_black border border-gold-500 outline-none placeholder:text-sm text-white placeholder:font-jakarta placeholder:text-gray-500"
                required
              />
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full mt-6 text-xl bg-gold-500 py-3 font-medium font-jakarta capitalize text-black"
              >
                Reset password{" "}
              </button>
            </div>
          </form>

          <Link
            to="/"
            className="text-white text-base font-semibold flex items-center justify-center gap-1.5 mt-4"
          >
            <BsArrowLeft className="text-xl" />
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
