import { useState } from 'react';
import setsList from '../assets/sets.json';
import { SetResponse } from "../types";
import bagSVG from "../assets/bag.svg";

console.log(`Found ${(setsList as SetResponse[]).length} sets`);

export const Sets = () => {
  const [visible, setVisible] = useState(12);

  const loadMore = () => {
    setVisible((prevValue) => prevValue + 12);
  }

  return (
    <div className='w-full flex-col place-items-center px-12'>
      <div className='bg-brand-light px-5 py-8 mb-5 mt-8'>
        <h1 className='text-xl font-bold mb-3'>New LEGO® Sets</h1>
        <p>
          Calling all LEGO® fans! If you love having the latest sets to build, save this page. You can find every new LEGO set we've released in the last 2 months here. From building toys to complex collectables, there’s a wide range to discover. Browse a vast LEGO assortment and filter by <a href="/en-gb/categories/age">age</a>, <a href="/en-gb/categories/price">price</a>, <a href="/en-gb/categories/interests">interest</a> and more.

          You can also find{' '}
          <a className='text-link-blue hover:underline' href="/en-gb/categories/coming-soon">sets that are coming soon</a>,{' '}
          <a className='text-link-blue hover:underline' href="/en-gb/categories/exclusives">LEGO Exclusives</a> and the most{' '}
          <a className='text-link-blue hover:underline' href="/en-gb/bestsellers">popular LEGO sets here</a>!
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t border-l'>
        {(setsList as SetResponse[]).sort((a, b) => b.year - a.year).slice(0, visible).map((set) => (
          <div key={set.set_num} className="border-b border-r flex flex-col justify-between place-items-start">
            <div className="p-3 mb-3 flex flex-col justify-center place-items-center relative h-48">
              <img className="object-contain h-full w-full" src={set.img_url} alt={set.name} />
            </div>

            <h1 className="font-medium px-3">{set.name}</h1>

            <button className="bg-brand-orange flex p-3 place-items-center rounded-full space-x-3 m-3">
              <img src={bagSVG} alt="bag" className="w-4 h-4" />
              <span className="font-medium text-sm">Add to Bag</span>
            </button>
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-5 mb-12'>
        <button
          onClick={loadMore}
          className="bg-link-blue text-white px-5 py-3 mt-5 rounded-full font-medium"
        >
          Find More
        </button>
      </div>
    </div>
  );
}
