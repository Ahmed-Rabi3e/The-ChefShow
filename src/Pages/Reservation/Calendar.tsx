import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

type Day = {
  id: number;
  day: string;
  date: string;
  price: string;
};

const Calendar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const days: Day[] = [
    { id: 1, day: "Sat", date: "07 Dec", price: "$130" },
    { id: 2, day: "Sun", date: "08 Dec", price: "$130" },
    { id: 3, day: "Mon", date: "09 Dec", price: "$130" },
    { id: 4, day: "Tue", date: "10 Dec", price: "$130" },
    { id: 5, day: "Wed", date: "11 Dec", price: "$130" },
    { id: 6, day: "Sat", date: "12 Dec", price: "$130" },
    { id: 7, day: "Sun", date: "13 Dec", price: "$130" },
    { id: 8, day: "Mon", date: "14 Dec", price: "$130" },
    { id: 9, day: "Tue", date: "15 Dec", price: "$130" },
  ];

  const expandedDays: Day[] = [
    ...days,
    ...days.map((day) => ({
      ...day,
      id: day.id + 9,
    })),
  ];

  const handleDateSelect = (id: number) => {
    setSelectedDate(id);
  };

  return (
    <div className=" basis-2/3 p-4 md:p-8 bg-main_black border border-gold-500 text-white max-w-[820px]  my-20">
      <h1 className="text-3xl md:text-5xl font-normal text-left font-restora_light mb-4">
        Pick Your Day
      </h1>
      <div className="text-left pl-4 mb-6 flex gap-4 text-xs md:text-sm">
        <span className="relative uppercase text-gray-400 mr-4 before:absolute before:top-1.5 before:-left-4 before:rounded-full before:w-2 before:h-2 before:bg-red-500">
          Fully Booked
        </span>
        <span className="relative uppercase text-gray-400 mr-4 before:absolute before:top-1.5 before:-left-4 before:rounded-full before:w-2 before:h-2 before:bg-yellow-500">
          Low Availability
        </span>
        <span className="relative uppercase text-gray-400 mr-4 before:absolute before:top-1.5 before:-left-4 before:rounded-full before:w-2 before:h-2 before:bg-green-500">
          Available
        </span>
      </div>
      <div className="flex items-center justify-between mb-8">
        <button className="text-lg">
          <FaArrowLeft />
        </button>
        <h2 className="text-2xl font-normal font-restora_light">
          December 2024
        </h2>
        <button className="text-lg">
          <FaArrowRight />
        </button>
      </div>
      <div className="grid grid-cols-2 place-items-center md:grid-cols-5 gap-6">
        {(isExpanded ? expandedDays : days).map((day) => (
          <div
            key={day.id}
            className={`p-2 text-center border-2 border-gold-500 cursor-pointer w-[145px] h-[130px] flex flex-col items-center justify-center transition-all duration-300 ${
              selectedDate === day.id
                ? "bg-gold-500 text-white"
                : "hover:border-white"
            }`}
            onClick={() => handleDateSelect(day.id)}
          >
            <div
              className={`font-medium uppercase text-sm ${
                selectedDate === day.id ? "text-white" : "text-gray-400 "
              }`}
            >
              {day.day}
            </div>
            <div className="text-2xl font-restora_light mt-1">{day.date}</div>
            <div className="w-16 h-1 rounded-md bg-green-500 mx-auto mt-1" />
            <div
              className={`text-xs text-center font-medium mt-3 ${
                selectedDate === day.id ? "text-white" : "text-gray-400 "
              }`}
            >
              Start From-{day.price}
            </div>
          </div>
        ))}
        {!isExpanded && (
          <button
            className="w-[145px] h-[130px] p-4 bg-gold-500 text-white font-restora_light text-2xl"
            onClick={() => setIsExpanded(true)}
          >
            MORE
          </button>
        )}
      </div>
      {isExpanded && (
        <button
          className="w-[145px] h-[130px] p-4 bg-gold-500 text-white font-restora_light text-2xl mt-6 ml-4 md:-ml-2"
          onClick={() => setIsExpanded(false)}
        >
          Less
        </button>
      )}
    </div>
  );
};

export default Calendar;
