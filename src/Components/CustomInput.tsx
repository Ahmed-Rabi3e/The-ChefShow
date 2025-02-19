import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa6";

interface CustomInputProps {
  label: string;
  type: string;
  placeholder: string;
  showPasswordToggle?: boolean;
  error?: string;
  register: UseFormRegisterReturn;
}

const CustomInput = ({
  label,
  type,
  placeholder,
  showPasswordToggle,
  error,
  register,
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-[10px] relative">
      <label className="font-light text-[16px] capitalize text-white">
        {label}
      </label>

      {/* Input Wrapper */}
      <div className="relative">
        <input
          {...register}
          type={showPasswordToggle && showPassword ? "text" : type}
          placeholder={placeholder}
          className="border border-[#C19F74] p-[10px] pr-12 bg-transparent text-white placeholder-[#6F6F6F] outline-none w-full"
          aria-label={label}
        />

        {/* Show/Hide Password Button */}
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-4 flex items-center justify-center"
            aria-label={`Toggle ${label}`}
          >
            {showPassword ? (
              <FaRegEyeSlash className="text-white text-xl" />
            ) : (
              <AiFillEye className="text-white text-xl" />
            )}
          </button>
        )}
      </div>

      {/* Display error message */}
      {error && <p className="text-red-500 -mt-2 text-right">{error}</p>}
    </div>
  );
};

export default CustomInput;
