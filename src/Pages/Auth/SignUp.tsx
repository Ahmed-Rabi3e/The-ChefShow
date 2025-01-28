import { useState } from "react";
import { Noise_Image, small_logo } from "@/assets";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
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
      <div className="w-[1300px] h-[830px] bg-main_black border-2 border-gold-500 flex">
        {/* Left side - Signup form */}
        <div className="w-full md:w-1/2 px-10 py-8 flex flex-col">
          <img
            src={small_logo}
            alt="smalllogo"
            loading="lazy"
            className="w-20 h-[76px] mx-auto mt-6"
          />

          {/* Form */}
          <h1 className="text-[40px] font-restora_light uppercase mt-6 mb-10 text-center font-bold">
            Create account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-base capitalize font-normal mb-1 text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Your Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-main_black border border-gold-500 outline-none placeholder:text-sm text-white placeholder:font-jakarta placeholder:text-gray-500"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-base capitalize font-normal mb-1 text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-main_black border border-gold-500 outline-none placeholder:text-sm text-white placeholder:font-jakarta placeholder:text-gray-500"
                required
              />
            </div>
            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-base capitalize font-normal mb-1 text-white"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter Your Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-main_black border border-gold-500 outline-none placeholder:text-sm text-white placeholder:font-jakarta placeholder:text-gray-500"
                required
              />
            </div>
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
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full mt-6 text-xl bg-gold-500 py-3 font-medium font-jakarta capitalize text-black"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="text-base text-white mt-6 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-gold-500 font-semibold">
              Log in
            </Link>
          </p>
        </div>

        {/* Right side - Background image & Card */}
        <div className="hidden md:block w-1/2 bg-gold-500 text-white relative p-6"></div>
      </div>
    </div>
  );
};

export default Signup;
