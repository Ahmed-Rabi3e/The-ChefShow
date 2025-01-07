import { icon_5, Support } from "@/assets";
import TitleHeading from "@/components/TitleHeading";
import React from "react";

const SupportSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-3 bg-main_black text-white py-12 px-6 my-16 md:px-16">
      {/* Text Content */}
      <div className="flex flex-col items-center text-center md:text-left md:w-1/2 space-y-2">
        <TitleHeading label="HELP & SUPPORT" img={icon_5} showIcons />
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-3xl lg:text-6xl font-normal uppercase font-restora_light">
            Need Support?
          </h2>
          <h2 className="text-3xl lg:text-6xl font-normal uppercase font-restora_light">
            We’re Here to Help
          </h2>
        </div>
        <p className="text-sm md:text-base text-gray-300 text-center !my-8 max-w-2xl">
          Our Restaurant Offers A Stylish And Fun European Cafe-Restaurant
          Experience, Inspired By Executive Chef Chris Hill. The All Day Dining
          Menu Is A Reflection Of The Very Best Of The Season.
        </p>
        <div className="flex space-x-4">
          <button className="bg-gold-500 text-white py-2 px-6 hover:bg-gold-500/75">
            Help Center
          </button>
          <button className="border border-gold-500 text-white py-2 px-6 hover:bg-gold-500">
            Contact Us
          </button>
        </div>
      </div>

      {/* Image Content */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src={Support}
          loading="lazy"
          alt="Team"
          className="rounded-md shadow-lg"
        />
      </div>
    </section>
  );
};

export default SupportSection;
