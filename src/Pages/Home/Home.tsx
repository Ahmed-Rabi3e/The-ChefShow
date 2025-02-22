import AboutSection from "./AboutSection";
import ChefShowSection from "./ChefShowSection ";
import { CarouselDemo } from "./HeroSection";
import Reviews from "./Reviews";
import SpecialMenu from "./SpecialMenu";
import SupportSection from "./SupportSection";

const Home = () => {
  return (
    <div className="bg-main_black">
      <CarouselDemo />
      <AboutSection />
      <ChefShowSection />
      <SpecialMenu />
      <Reviews />
      <SupportSection />
    </div>
  );
};

export default Home;
