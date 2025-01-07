import { Chefshow_1, Chefshow_2, icon_2 } from "../../assets";
import TitleHeading from "../../components/TitleHeading";

const stats = [
  {
    id: 1,
    title: "Visitor Daily",
    image: Chefshow_1,
  },
  {
    id: 2,
    title: "Delivery Order",
    image: Chefshow_2,
  },
];

const ChefShowSection = () => {
  return (
    <section className="bg-main_black text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <TitleHeading label="All Day Experience" img={icon_2} showIcons />
        <h2 className="text-center mx-auto text-4xl md:text-6xl font-normal mb-6 uppercase max-w-4xl font-restora_light">
          The perfect place for an exceptional experience
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
                className="group-even:h-[518px] group-odd:h-[403px] w-[438px] object-cover mb-4"
              />
            </div>
          ))}
          <div className="place-self-start max-w-[350px] capitalize mt-4">
            <p className="mb-4 text-base">
              By day, The chef show provides a hub to meet friends and
              colleagues with a well-crafted wine list, discreet yet
              professional service and sophisticated menus all delivered in a
              relaxed setting.
            </p>
            <p className="mb-4 text-base">
              By night the scene is set for any and all occasions.From intimate
              tables for two to small groups or larger private events. Our
              unparalleled attention to detail and strong focus on delivering
              the best culinary experiences is designed to exceed expectations.
            </p>
            <p className="mb-6 text-base">Booking request</p>
            <h3 className="mb-6 text-3xl text-gold-500 font-restora_light">
              +39-055-123456
            </h3>
            <button className="bg-gold-500 px-6 py-4 w-52">View menu</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefShowSection;
