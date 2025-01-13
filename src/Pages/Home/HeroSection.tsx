import { Hero, icon } from "@/assets";
import TitleHeading from "@/Components/TitleHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export function CarouselDemo() {
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

  return (
    <Carousel className="!w-full relative h-[662px] border-b-2 border-b-gold-500 overflow-hidden rounded-b-[120px]">
      <CarouselContent>
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index}>
            {slides.map((slide) => (
              <div
                className="relative w-full h-full flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
                key={slide.id}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/75" />

                {/* Slide Content */}
                <div className="relative z-10 text-center text-white px-4 max-w-3xl">
                  <TitleHeading
                    label="welcome to THE CHEF SHOW"
                    img={icon}
                    showIcons
                  />
                  <h1 className="text-3xl md:text-7xl font-semibold mb-4 leading-snug font-restora_light">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                  <button className="bg-transparent border-2 border-gold-500 px-6 py-2 text-white font-semibold hover:bg-gold-500">
                    Reservation
                  </button>
                </div>
              </div>
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="absolute top-2/3 md:top-1/2 left-8 md:left-12 z-20 text-white bg-black/50 rounded-full h-10 w-10 md:h-20 md:w-20 border-[1px] border-white hover:border-gold-500 hover:text-white hover:bg-gold-500"
        aria-label="Previous"
      >
        <GoArrowLeft />
      </CarouselPrevious>
      <CarouselNext
        className="absolute top-2/3 md:top-1/2 right-8 md:right-12 z-20 text-white bg-black/50 rounded-full h-10 w-10 md:h-20 md:w-20 border-[1px] border-white hover:border-gold-500 hover:text-white hover:bg-gold-500"
        aria-label="Next"
      >
        <GoArrowRight />
      </CarouselNext>
    </Carousel>
  );
}
