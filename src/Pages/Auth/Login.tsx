import { useState } from "react";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "@/schemas/Login";
import CustomInput from "@/Components/CustomInput";
import small_logo from "@/assets/small_logo.png";
import OverlayImages from "@/Components/AuthComponents/OverlayBack";

import Hero from "@/assets/Hero.webp";
import landing from "@/assets/Landing.png";

const Login = () => {
  const [showPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log("Submitting Login....:", data);
  };

  return (
    <section className="flex h-screen relative">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-main_black text-white px-6 md:px-10 lg:px-16 relative">
        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-[24px] lg:text-[36px] uppercase font-restora font-bold mb-2 leading-[30px] md:leading-[35px] lg:leading-[45px]">
            Welcome to The Chef Show!
          </h1>
          <p className="text-sm md:text-[16px] capitalize">
            Enjoy exclusive services when you sign in.
          </p>
          <div className="border border-[#525252] my-6 md:my-10" />
        </div>

        <form
          className="flex flex-col gap-6 w-full max-w-[536px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Email input */}
          <CustomInput
            label="Email or phone number"
            type="text"
            placeholder="Enter your Email"
            register={register("email")}
            error={errors.email?.message}
          />

          {/* Password input */}
          <CustomInput
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your Password"
            showPasswordToggle
            register={register("password")}
            error={errors.password?.message}
          />

          <Link
            to="/forgot-password"
            className="text-gold-500 text-right font-semibold text-[16px]"
          >
            Forgot Password?
          </Link>

          <button
            type="submit"
            className="bg-gold-500 text-black font-medium text-[20px] flex items-center justify-center h-[58px]"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          <p className="font-medium text-[16px] text-white text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-gold-500">
              Create an account
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
            Taste <br />
            the Experience <br />
            <span className="text-gold-500">log in now!</span>
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

export default Login;
