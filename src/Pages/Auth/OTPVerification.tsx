import { useState } from "react";
import small_logo from "@/assets/small_logo.png";
import OverlayImages from "@/Components/AuthComponents/OverlayBack";

import Hero from "@/assets/Hero.webp";
import landing from "@/assets/Landing.png";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  return (
    <section className="flex h-screen relative">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-main_black text-white px-6 md:px-10 lg:px-16 relative">
        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-[24px] lg:text-[36px] uppercase font-restora_light font-bold mb-2 leading-[30px] md:leading-[35px] lg:leading-[45px]">
            VERIFICATION CODE
          </h1>
          <p className="text-sm md:text-[16px] capitalize">
            For security reasons, this code expires in 2 minutes.
          </p>
          <div className="border w-full md:w-[536px] border-[#525252] my-6 md:my-10" />
        </div>

        <div className="mt-6 flex justify-center gap-4">
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={value}
              maxLength={1}
              placeholder="0"
              onChange={(e) => handleChange(index, e.target.value)}
              className="h-16 md:h-[100px] w-16 md:w-[125px] border border-gold-500 bg-transparent font-bold text-center text-6xl placeholder:text-neutral-700 font-restora_light focus:border-gold-500 focus:outline-none"
            />
          ))}
        </div>
        <button className="mt-6 bg-gold-500 py-3 text-black font-medium w-full md:w-[550px]">
          Continue
        </button>

        {/* Resend & Back to Login */}
        <p className="mt-4 text-center text-white">
          Didn’t receive the email?{" "}
          <Link to="#" className="text-gold-500 font-semibold underline">
            Click to resend
          </Link>
        </p>

        <Link
          to="/"
          className="text-white text-base font-semibold flex items-center justify-center gap-1.5 mt-4"
        >
          <BsArrowLeft className="text-xl" />
          Back to login
        </Link>

        <OverlayImages bgImg={landing} />
      </div>

      {/* Right Side - Image & Text (Hidden on Small Screens) */}
      <div className="w-1/2 relative hidden md:block">
        {/* Background Image */}
        <img
          src={Hero}
          alt="Background"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col px-8 mt-16">
          <h2 className="font-restora_light uppercase text-white text-2xl md:text-[35px] lg:text-[56px] font-normal leading-[40px] md:leading-[50px] lg:leading-[70px]">
            <span className="text-gold-500">Verify </span>
            <br />
            Your identity
            <br />
            to continue
          </h2>
        </div>

        {/* Auth Icon */}
        <img
          src={small_logo}
          alt="Auth Icon"
          className="absolute bottom-10 right-12 w-20 h-w-20 z-10"
        />
      </div>
    </section>
  );
};

export default OTPVerification;
