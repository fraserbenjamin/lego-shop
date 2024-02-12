import { FC } from "react";
import jurassicWorld from "../assets/jurassicPark.jpeg";
import pacman from "../assets/pacman.jpeg";
import landrover from "../assets/landrover.jpeg";
import princessCastle from "../assets/princessCastle.jpeg";

const reads: CardProps[] = [
  {
    title: "Best Jurassic World Toys",
    description: "Enter a world of adventure with our collection of LEGO® Jurassic World toys! Featuring heroic characters and iconic dinosaurs, these toys guarantee endless fun.",
    image: jurassicWorld,
  },
  {
    title: "How PAC-MAN was inspired by the yellow color of LEGO® bricks",
    description: "Our LEGO® designer explains how we turned the iconic 80s arcade game into a LEGO set...",
    image: pacman,
  },
  {
    title: "5 of the best LEGO® classic cars and vehicles for adults",
    description: "Vroom! As we launch the new LEGO® Icons Land Rover Classic Defender 90, we thought we’d remind you of some of the best classic car sets...",
    image: landrover,
  },
  {
    title: "The 8 Best LEGO® ǀ Disney Princess™ Toys for Girls and Boys",
    description: "Make playtime magical for young princes and princesses with these LEGO® ǀ Disney Princess™ toys, featuring all of their favorite heroines.",
    image: princessCastle,
  },
]

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: FC<CardProps> = ({ title, description, image }) => (
  <div className="p-3">
    <img src={image} alt={title} className="h-48 object-cover w-full" />

    <div className='flex flex-col place-items-center'>
      <h2 className='text-xl my-5 font-bold text-center'>{title}</h2>
      <span className='text-center text-sm'>{description}</span>

      <button className='flex place-items-center space-x-2 mt-2'>
        <span className='font-medium'>Read more</span>
        <svg className='h-3' viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path></svg>
      </button>
    </div>
  </div>
);

const ReadAllAboutIt = () => (
  <div className='mx-8 my-5'>
    <h1 className='text-3xl mt-8 mb-3 mx-3'>This week's top picks</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {reads.map((read) => (
        <Card key={read.title} {...read} />
      ))}
    </div>
  </div>
);

export default ReadAllAboutIt;
