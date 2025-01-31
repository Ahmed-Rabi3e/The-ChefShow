import { contact } from "@/assets";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="container mx-auto w-full h-[795px] flex flex-col md:flex-row items-center justify-between bg-main_black border border-gold-500 overflow-hidden my-36">
      {/* Form Section */}
      <div className="w-full md:w-1/2 p-4 md:p-10 bg-main_black text-white">
        <h1 className="text-4xl md:text-5xl font-restora_light mb-2 mt-4 capitalize">
          Contact us
        </h1>
        <p className="text-sm md:text-lg text-gray-300 mb-6 max-w-lg">
          Hello! Do you have any questions or suggestions about this site, or
          just want to say Hi? Send a message using the below form. I will get
          back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-base capitalize font-normal mb-1 text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-main_black border border-gold-500 outline-none placeholder:text-sm text-white placeholder:font-restora_light placeholder:text-gray-400"
              rows={4}
              required
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gold-500 py-3 uppercase text-white font-normal"
            >
              Send A Message
            </button>
          </div>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 h-auto hidden md:block">
        <img
          src={contact}
          alt="Contact Us"
          loading="lazy"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default ContactForm;
