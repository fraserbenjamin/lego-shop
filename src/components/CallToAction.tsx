import { FC } from "react";
import dreamzSets from "../assets/dreamzSets.jpeg";
import hammock from "../assets/hammock.jpeg";
import eiffelTower from "../assets/eiffelTower.jpeg";

const items: CardProps[] = [
  {
    title: "Win a LEGO® DREAMZzz™ bundle",
    description: "Enter for your chance to win all of the new sets!",
    image: dreamzSets,
    action: "insider",
  },
  {
    title: "Catch them before they're gone!",
    description: "Find out which LEGO® sets are retiring soon.",
    image: hammock,
    action: "shop",
  },
  {
    title: "LEGO® Eiffel tower",
    description: "Build a model of one of the world’s best-loved landmarks.",
    image: eiffelTower,
    action: "shop",
  },
]

interface CardProps {
  title: string;
  description: string;
  image: string;
  action: "shop" | "insider";
}

const Card: FC<CardProps> = ({ title, description, image, action }) => (
  <div className="p-3">
    <img src={image} alt={title} className="h-48 object-cover w-full" />

    <div className='flex flex-col place-items-center'>
      <h2 className='text-xl my-5 font-bold text-center'>{title}</h2>
      <span className='text-center text-sm'>{description}</span>

      <button className='flex place-items-center space-x-2 mt-2'>
        <span className='font-medium'>
          {action === "shop" ? "Shop now" : null}
          {action === "insider" ? "Become an Insider" : null}
        </span>
        <svg className='h-3' viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path></svg>
      </button>
    </div>
  </div>
);

const CallToAction = () => (
  <div className='px-8 py-5 bg-brand-light'>
    <div className="grid grid-cols-1 md:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} {...item} />
      ))}
    </div>
  </div>
);

export default CallToAction;
