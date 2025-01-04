import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Hero, icon } from "../../assets";
import TitleHeading from "../../Components/TitleHeading";
import { NavigationOptions } from "swiper/types";

const HeroSection: React.FC = () => {
  const slides = [
    {
      id: 1,
      title: "DELICIOUS FOOD EATING EXPERIENCE",
      subtitle: "We Serve Food, Harmony, & Laughter Since 1991",
      image: Hero,
    },
    {
      id: 2,
      title: "FRESH INGREDIENTS EVERY DAY",
      subtitle: "Discover the finest dishes made with love",
      image: Hero,
    },
  ];

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section
      className="relative h-[856px] w-full flex items-center justify-center bg-cover bg-center overflow-hidden border-b-2 border-b-gold-500 !rounded-b-[120px]"
      style={{
        backgroundImage: `url(${Hero})`,
      }}
    >
      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          // Type-cast to NavigationOptions
          const navigation = swiper.params.navigation as NavigationOptions;
          navigation.prevEl = prevRef.current;
          navigation.nextEl = nextRef.current;

          // Ensure the navigation module is updated
          swiper.navigation.update();
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full flex items-center justify-center font-jakarta">
              <div className="absolute inset-0 bg-black/75" />

              {/* Content */}
              <div className="relative z-10 text-center text-white px-4 max-w-3xl">
                <TitleHeading
                  label="welcome to THE CHEF SHOW"
                  img={icon}
                  showIcons
                />
                <h1 className="text-3xl md:text-7xl font-semibold mb-4 !leading-snug font-restora_light">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                <button className="bg-transparent border-2 border-gold-500 px-6 py-2 text-white font-semibold hover:bg-gold-500">
                  Reservation
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="h-10 w-10 md:h-20 md:w-20 absolute top-1/2 left-12 border-[1px] border-white transform -translate-y-1/2 z-10 text-white bg-black/50 p-5 rounded-full hover:bg-black/70"
        aria-label="Previous"
      >
        <GoArrowLeft className="text-2xl -translate-y-3 -translate-x-3 md:translate-x-0.5 md:translate-y-0 md:text-4xl" />
      </button>
      <button
        ref={nextRef}
        className="h-10 w-10 md:h-20 md:w-20 absolute top-1/2 right-12 border-[1px] border-white transform -translate-y-1/2 z-10 text-white bg-black/50 p-5 rounded-full hover:bg-black/70"
        aria-label="Next"
      >
        <GoArrowRight className="text-2xl -translate-y-3 -translate-x-3 md:translate-x-0.5 md:translate-y-0 md:text-4xl" />
      </button>
    </section>
  );
};

export default HeroSection;
