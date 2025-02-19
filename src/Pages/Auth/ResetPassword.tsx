import { useState } from "react";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ResetPasswordFormData, resetPasswordSchema } from "@/schemas/Reset";
import CustomInput from "@/Components/CustomInput";
import small_logo from "@/assets/small_logo.png";
import OverlayImages from "@/Components/AuthComponents/OverlayBack";

import Hero from "@/assets/Hero.webp";
import landing from "@/assets/Landing.png";
import { BsArrowLeft } from "react-icons/bs";

const ResetPassword = () => {
  const [showPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    mode: "onBlur",
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit: SubmitHandler<ResetPasswordFormData> = (data) => {
    console.log("Submitting Forget Password Up....", data);
  };

  return (
    <section className="flex h-screen relative">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-main_black text-white px-6 md:px-10 lg:px-16 relative">
        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-[24px] lg:text-[36px] uppercase font-restora_light font-bold mb-2 leading-[30px] md:leading-[35px] lg:leading-[45px]">
            Reset Your Password
          </h1>
          <p className="text-sm md:text-[16px] capitalize">
            For security reasons, this code expires in 2 minutes.
          </p>
          <div className="border w-full md:w-[536px] border-[#525252] my-6 md:my-10" />
        </div>

        <form
          className="flex flex-col gap-2 md:gap-6 w-full max-w-[536px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <CustomInput
            label="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Your Password"
            register={register("password")}
            error={errors.password?.message}
          />

          {/* confirm password */}
          <CustomInput
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Your Password"
            register={register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gold-500 text-black font-medium text-[20px] flex items-center justify-center h-[58px] mt-2 md:mt-0"
          >
            {isSubmitting ? "Resting in..." : "Reset Password"}
          </button>

          <Link
            to="/login"
            className="text-white text-base font-semibold flex items-center justify-center gap-1.5"
          >
            <BsArrowLeft className="text-xl" />
            Back to login
          </Link>
        </form>

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
            <span className="text-gold-500"> create </span>
            <br />
            a new password
            <br />
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

export default ResetPassword;
