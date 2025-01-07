import { About_1, About_2, About_3, icon_1 } from "../../assets";
import TitleHeading from "../../Components/TitleHeading";

const AboutSection = () => {
  const stats = [
    {
      id: 1,
      number: "490+",
      title: "Visitor Daily",
      description:
        "Our Restaurant Offers A Stylish And Fun European Cafe-Restaurant Experience.",
      image: About_1,
    },
    {
      id: 2,
      number: "1590+",
      title: "Delivery Order",
      description:
        "Our Restaurant Offers A Stylish And Fun European Cafe-Restaurant Experience.",
      image: About_2,
    },
    {
      id: 3,
      number: "100%",
      title: "Positive Feedback",
      description:
        "Our Restaurant Offers A Stylish And Fun European Cafe-Restaurant Experience.",
      image: About_3,
    },
  ];

  return (
    <section className="bg-main_black text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <TitleHeading label="All Day Experience" img={icon_1} showIcons />
        <h2 className="text-center text-4xl md:text-6xl font-normal mb-6 font-restora_light">
          ABOUT THE CHEF SHOW
        </h2>
        <p className="text-center text-sm md:text-base max-w-2xl mx-auto mb-12">
          Our Restaurant Offers A Stylish And Fun European Cafe-Restaurant
          Experience, Inspired By Executive Chef Chris Hill. The All Day Dining
          Menu Is A Reflection Of The Very Best Of The Season.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {stats.map((stat) => (
            <div key={stat.id} className="text-left bg-main_black group">
              <img
                src={stat.image}
                alt={stat.title}
                loading="lazy"
                className="group-odd:h-[518px] group-even:h-[342px] w-[438px] object-cover mb-4"
              />
              <h3 className="text-5xl font-normal text-gold-500 mb-2 font-restora_light">
                {stat.number}
              </h3>
              <h4 className="text-4xl font-normal mb-4 font-restora_light">
                {stat.title}
              </h4>
              <p className="text-gray-400 text-base max-w-96">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
