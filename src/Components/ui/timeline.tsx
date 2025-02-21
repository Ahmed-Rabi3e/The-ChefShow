import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { MorphingText } from "./MorphingText";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const texts = ["passion", "adventure", "story", "journey", "experience"];

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-main_black font-jakarta md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl mb-4 text-white max-w-4xl">
          Our Culinary
          <MorphingText
            texts={texts}
            className="text-xl md:text-[48px]  !inline font-restora_light !italic capitalize"
          />
        </h2>
        <p className="text-white text-sm md:text-base max-w-md">
          Welcome to The Chef Show, where culinary meets creativity, connection,
          and unforgettable experiences
        </p>
      </div>

      <div ref={ref} className="relative mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-restora_thin text-white">
                {item.title}
                <p className="text-gold-500 uppercase text-xs font-jakarta mt-2 mb-4">
                  Season 2
                </p>
                <p className="text-white capitalize text-lg font-restora_thin mt-2 mb-1">
                  In collaboration with
                </p>
                <div className="text-white capitalize text-lg font-restora_light underline font-semibold mb-4">
                  ⭐️ Meat House Gourmet
                </div>
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-orange-500 via-gold-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
