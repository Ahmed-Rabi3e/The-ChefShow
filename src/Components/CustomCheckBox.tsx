import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const CustomCheckbox = ({ label }: { label: string }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label
      className="flex items-center space-x-2 cursor-pointer"
      onClick={() => setChecked(!checked)}
    >
      {/* Custom Checkbox */}
      <div
        className={`w-5 h-5 flex items-center justify-center border transition-all duration-200 ${
          checked ? "bg-blue-500 border-white" : "bg-transparent border-gray-400"
        }`}
      >
        {checked && <FaCheck className="text-white" size={14} />}
      </div>

      {/* Label */}
      <span className="text-white">{label}</span>
    </label>
  );
};

export default CustomCheckbox;
