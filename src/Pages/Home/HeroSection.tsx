import { useEffect, useState } from "react";
import { Hero, icon } from "@/assets";
import TitleHeading from "@/Components/TitleHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";

type CarouselApi = {
  selectedScrollSnap: () => number;
  scrollTo: (index: number) => void;
  on: (event: "select", callback: () => void) => void;
};

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

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      // Cleanup listener if the component unmounts
      api.on("select", () => {});
    };
  }, [api]);

  return (
    <Carousel
      setApi={(apiInstance) => setApi(apiInstance as CarouselApi)}
      className="!w-full relative h-[650px] border-b-2 border-b-gold-500 overflow-hidden rounded-b-[48px] md:rounded-b-[120px]"
    >
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div
              className="relative w-full h-[70vh] flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
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
                <h1 className="text-3xl md:text-7xl font-normal mb-4 leading-snug font-restora_light">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                <button className="bg-transparent border-2 uppercase border-gold-500 px-6 py-2 text-white font-semibold hover:bg-gold-500">
                  Reservation
                </button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="absolute top-1/2 left-12 z-20 text-white bg-black/50 rounded-full h-20 w-20 border-[1px] border-white hover:border-gold-500 hover:text-white hover:bg-gold-500 hidden md:flex"
        aria-label="Previous"
      />
      <CarouselNext
        className="absolute top-1/2 right-12 z-20 text-white bg-black/50 rounded-full h-20 w-20 border-[1px] border-white hover:border-gold-500 hover:text-white hover:bg-gold-500 hidden md:flex"
        aria-label="Next"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "w-10 bg-gold-500"
                : "w-3 bg-white/75 hover:bg-white"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
}
