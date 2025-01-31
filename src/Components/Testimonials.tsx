import { user } from "@/assets/index";
import Marquee from "@/Components/ui/marquee";
import { cn } from "@/lib/utils";

interface Review {
  name: string;
  username: string;
  body: string;
  img: string;
}

const reviews: Review[] = [
  {
    name: "Michael Adham",
    username: "chief",
    body: "“The reviews of customers when coming to our restaurant by night the scene is set for any and all occasions. From intimate tables for two to small groups or larger private events.",
    img: user,
  },
  {
    name: "Michael Adham",
    username: "chief",
    body: "“The reviews of customers when coming to our restaurant by night the scene is set for any and all occasions. From intimate tables for two to small groups or larger private events.",
    img: user,
  },
  {
    name: "Michael Adham",
    username: "chief",
    body: "“The reviews of customers when coming to our restaurant by night the scene is set for any and all occasions. From intimate tables for two to small groups or larger private events.",
    img: user,
  },
  {
    name: "Michael Adham",
    username: "chief",
    body: "“The reviews of customers when coming to our restaurant by night the scene is set for any and all occasions. From intimate tables for two to small groups or larger private events.",
    img: user,
  },
  {
    name: "Michael Adham",
    username: "chief",
    body: "“The reviews of customers when coming to our restaurant by night the scene is set for any and all occasions. From intimate tables for two to small groups or larger private events.",
    img: user,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

interface ReviewCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
}

// ReviewCard Component
const ReviewCard: React.FC<ReviewCardProps> = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative w-96 cursor-pointer overflow-hidden border p-4 mb-4",
        // Light styles
        "border-gold-500 bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // Dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className=""
          loading="lazy"
          width="64"
          height="62"
          alt="user"
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-base font-medium text-gold-500 uppercase dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-normal dark:text-white/40 uppercase">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="py-2 text-base capitalize">{body}</blockquote>
    </figure>
  );
};

// Testimonials Component
export const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={`${review.username}-${index}`} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={`${review.username}-${index}`} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-main_black dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-main_black dark:from-background"></div>
    </div>
  );
};
