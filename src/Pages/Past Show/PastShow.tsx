import { Timeline } from "@/Components/ui/timeline";
import LandingPage from "../Reservation/LandingPage";
import { Hero } from "@/assets";

export default function TimelineDemo() {
  const data = [
    {
      title: "The BBQ Show",
      content: (
        <div>
          <p className="text-white text-xs md:text-lg font-normal font-restora_thin mb-8">
            The outdoor culinary adventure is back celebrating the art of
            grilling over firewood. Hearty dishes, smoky flavors, and cozy
            evenings under the stars make this season unforgettable - uplifted
            this year with a fire pit to bring warmth to the cold winter nights.
          </p>
          <div className="grid grid-cols-2 gap-x-10 gap-y-5 ml-0 md:ml-8">
            <img
              src={Hero}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-md object-cover h-20 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Hero}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-md object-cover h-20 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Hero}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-md object-cover h-20 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Hero}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-md object-cover h-20 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "La Casa De Papel",
      content: (
        <div>
          <p className="text-white text-xs md:text-lg font-normal font-restora_thin mb-8">
            Inspired by the iconic series, this Spanish-themed menu featured
            tapas, authentic paella, and churros. A show filled with bold
            flavors and a thrilling storyline.
          </p>
          <div className="grid grid-cols-2 gap-x-10 gap-y-5 ml-0 md:ml-8">
            <img
              src={Hero}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-md object-cover h-20 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Hero}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-md object-cover h-20 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Hero}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-md object-cover h-20 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Hero}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-md object-cover h-20 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "The Italian Show",
      content: (
        <div>
          <p className="text-white text-xs md:text-lg font-normal font-restora_thin mb-8">
            A journey through the South of Italy with dishes showcasing rich
            traditions. From handmade pasta to vibrant salads, every bite
            celebrated Italian artistry and passion.
          </p>
          <div className="grid grid-cols-2 gap-x-10 gap-y-5 ml-0 md:ml-8">
            <img
              src={Hero}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-md object-cover h-20 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Hero}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-md object-cover h-20 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Hero}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-md object-cover h-20 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Hero}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-md object-cover h-20 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full mb-32">
      <LandingPage label="Past Shows" />
      <Timeline data={data} />
    </div>
  );
}
