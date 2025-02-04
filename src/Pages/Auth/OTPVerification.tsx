import { useState } from "react";
import { Noise_Image, small_logo } from "@/assets";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

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
    <div
      className="container mx-auto h-screen w-full  flex items-center justify-center bg-main_black px-5 md:px-10"
      style={{
        backgroundImage: `url(${Noise_Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-fit bg-main_black border-2 border-gold-500 flex">
        <div className="w-full px-4 md:px-10 py-8 flex flex-col">
          <img
            src={small_logo}
            alt="smalllogo"
            loading="lazy"
            className="w-20 h-[76px] mx-auto mt-6"
          />

          {/* Form */}
          <h1 className="text-2xl md:text-[40px] font-restora_light uppercase mt-6 text-center font-bold">
            VERIFICATION CODE
          </h1>
          <p className="mt-2 text-neutral-400 text-center">
            For security reasons, this code expires in 2 minutes.
          </p>
          {/* OTP Input Fields */}
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

          {/* Continue Button */}
          <button className="mt-6 w-full rounded bg-gold-500 py-3 text-black font-medium">
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
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
