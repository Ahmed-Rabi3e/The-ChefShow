import { Testimonials } from "@/components/Testimonials";
import { icon_4 } from "../../assets";
import TitleHeading from "../../components/TitleHeading";

const Reviews = () => {
  return (
    <section className="bg-main_black text-white py-16">
      <div className="max-w-7xl mx-auto">
        <TitleHeading label="testimonials" img={icon_4} showIcons />
        <h2 className="text-center mx-auto text-4xl md:text-6xl font-normal mb-14 uppercase w-full md:max-w-6xl font-restora_light">
          The reviews of customers when coming to our restaurant!
        </h2>
      </div>
      <Testimonials />
    </section>
  );
};

export default Reviews;
