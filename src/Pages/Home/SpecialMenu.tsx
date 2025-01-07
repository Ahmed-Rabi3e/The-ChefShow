import {
  icon_3,
  Special_1,
  Special_2,
  Special_3,
  Special_4,
  Special_5,
  Special_6,
  Special_7,
  Special_8,
} from "../../assets";
import TitleHeading from "../../components/TitleHeading";

const SpecialMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Spaghetti Pasta",
      description: "Ground Beef, Onion, Chopped, Garlic, Minced, Green...",
      image: Special_1,
    },
    {
      id: 2,
      name: "Beef Meat Steak",
      description: "Ground Beef, Onion, Chopped, Garlic, Minced, Green...",
      image: Special_2,
    },
    {
      id: 3,
      name: "Lomo De Salmon",
      description: "Ground Beef, Onion, Chopped, Garlic, Minced, Green...",
      image: Special_3,
    },
    {
      id: 4,
      name: "Steamed Lobster",
      description: "Ground Beef, Onion, Chopped, Garlic, Minced, Green...",
      image: Special_4,
    },
    {
      id: 5,
      name: "Pumpkin Soup",
      description: "Ground Beef, Onion, Chopped, Garlic, Minced, Green...",
      image: Special_5,
    },
    {
      id: 6,
      name: "Garlic Shrimp",
      description: "Ground Beef, Onion, Chopped, Garlic, Minced, Green...",
      image: Special_6,
    },
    {
      id: 7,
      name: "Vegetable Noodles",
      description: "Ground Beef, Onion, Chopped, Garlic, Minced, Green...",
      image: Special_7,
    },
    {
      id: 8,
      name: "Fish Salad Asian",
      description: "Ground Beef, Onion, Chopped, Garlic, Minced, Green...",
      image: Special_8,
    },
  ];

  return (
    <section className="bg-main_black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <TitleHeading label="Special Offers" img={icon_3} showIcons />
        <h2 className="text-center mx-auto text-4xl md:text-6xl font-normal mb-14 uppercase max-w-3xl font-restora_light">
          the Special Menu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="text-center">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-[365px] w-full object-cover rounded-lg mb-4 shadow-md"
              />
              <h3 className="text-3xl font-normal font-restora_light">
                {item.name}
              </h3>
              <p className="text-sm text-gray-400 mt-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
