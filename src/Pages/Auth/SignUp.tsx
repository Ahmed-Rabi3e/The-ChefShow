import { useState } from "react";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signupSchema, SignUpFormData } from "@/schemas/Signup";
import CustomInput from "@/Components/CustomInput";
import small_logo from "@/assets/small_logo.png";
import OverlayImages from "@/Components/AuthComponents/OverlayBack";

import Hero from "@/assets/Hero.webp";
import landing from "@/assets/Landing.png";

const Signup = () => {
  const [showPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    mode: "onBlur",
    resolver: zodResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    console.log("Submitting Sign Up....", data);
  };

  return (
    <section className="flex h-screen relative">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-main_black text-white px-6 md:px-10 lg:px-16 relative">
        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-[24px] lg:text-[36px] uppercase font-restora_light font-bold mb-2 leading-[30px] md:leading-[35px] lg:leading-[45px]">
            Join The Chef Show Today!
          </h1>
          <p className="text-sm md:text-[16px] capitalize">
            Sign up now and enjoy a seamless dining experience!
          </p>
          <div className="border w-full md:w-[536px] border-[#525252] my-6 md:my-10" />
        </div>

        <form
          className="flex flex-col gap-2 md:gap-6 w-full max-w-[536px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <CustomInput
            label="Your Name"
            type="text"
            placeholder="Enter your Full Name"
            register={register("name")}
            error={errors.name?.message}
          />

          <CustomInput
            label="email"
            type="text"
            placeholder="Enter your email"
            register={register("email")}
            error={errors.email?.message}
          />

          <CustomInput
            label="Phone number"
            type="text"
            placeholder="Enter your Full Phone Number"
            register={register("phone")}
            error={errors.phone?.message}
          />

          <CustomInput
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your Password"
            register={register("password")}
            error={errors.password?.message}
          />
          <button
            type="submit"
            className="bg-gold-500 text-black font-medium text-[20px] flex items-center justify-center h-[58px] mt-2 md:mt-0"
          >
            {isSubmitting ? "Sign in..." : "Sign Up"}
          </button>

          <p className="font-medium text-[16px] text-white text-center">
            Already have an account?
            <Link to="/login" className="text-gold-500">
              Log in
            </Link>
          </p>
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
            <span className="text-gold-500">sign up </span>
            <br />
            and savor the <br />
            <span>Experience! </span>
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

export default Signup;
