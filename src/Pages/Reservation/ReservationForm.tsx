import { useState } from "react";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    quantity: 0,
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
    <div className="basis-1/3 h-fit py-8 px-6 bg-main_black border border-gold-500 text-white mt-4 mb-16 md:my-20 md:sticky md:top-[92px]">
      <h1 className="capitalize font-restora_light text-4xl">
        enter your data
      </h1>
      <p className="text-sm text-gray-300 mt-1 capitalize">
        enter your information to complete the details
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-base capitalize font-normal mb-1 text-white"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter Your Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-main_black border border-gold-500 outline-none placeholder:text-sm text-white placeholder:font-restora_light placeholder:text-gray-400"
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
            className="w-full px-4 py-3 bg-main_black border border-gold-500 outline-none placeholder:text-sm text-white placeholder:font-restora_light placeholder:text-gray-400"
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
            className="w-full px-4 py-3 bg-main_black border border-gold-500 outline-none placeholder:text-sm text-white placeholder:font-restora_light placeholder:text-gray-400"
            required
          />
        </div>
        {/* Quantity */}
        <div>
          <label
            htmlFor="quantity"
            className="block text-base capitalize font-normal mb-1 text-white"
          >
            Quantity For Seats
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="0"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-main_black border border-gold-500 outline-none placeholder:text-sm text-white placeholder:font-restora_light placeholder:text-gray-400"
            min="0"
            required
          />
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full mt-2 bg-gold-500 py-3 font-restora_light text-white font-normal"
          >
            Reservation NOW
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
