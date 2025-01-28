import { useState } from "react";
import { Noise_Image, small_logo } from "@/assets";
import { Link } from "react-router-dom";
import CustomCheckbox from "@/Components/CustomCheckBox";

const Login = () => {
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
      <div className="w-[1300px] h-fit bg-main_black border-2 border-gold-500 flex">
        {/* Left side - Login form */}
        <div className="w-full md:w-1/2 px-10 py-8 flex flex-col">
          <img
            src={small_logo}
            alt="smalllogo"
            loading="lazy"
            className="w-20 h-[76px] mx-auto mt-6"
          />

          {/* Form */}
          <h1 className="text-[40px] font-restora_light uppercase mt-6 text-center font-bold">
            Login to your account
          </h1>
          <h3 className="text-base font-jakarta capitalize my-2 text-center mb-10 ">
            Your Gateway to Exclusive Deals and Offers!
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-base capitalize font-normal mb-1 text-white"
              >
                Email or phone number
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
            {/* Remmber Me  */}
            <div className="flex items-center justify-between">
              <CustomCheckbox label="Remember me" />
              <Link to="/" className="text-gold-500 text-base">
                Forgot Password?
              </Link>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full mt-6 text-xl bg-gold-500 py-3 font-medium font-jakarta capitalize text-black"
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-base text-white mt-6 text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-gold-500 font-semibold">
              Create an account
            </Link>
          </p>
        </div>

        {/* Right side - Background image & Card */}
        <div className="hidden md:block w-1/2 bg-gold-500 text-white relative p-6"></div>
      </div>
    </div>
  );
};

export default Login;
