
import { FC } from 'react';
import { Link } from 'react-router-dom';
import legoSVG from '../assets/lego.svg';

interface NavBarProps {
  sticky?: boolean;
}

const NavBar: FC<NavBarProps> = ({ sticky }) => {
  return (
    <nav className={`bg-brand-yellow uppercase font-medium text-md flex px-8 ${sticky ? "sticky top-0 z-10" : null}`}>
      <Link to="/">
        <img
          src={legoSVG}
          alt="LEGO"
          className='w-14 h-14 object-contain my-2'
          loading="eager"
          decoding="async"
        />
      </Link>

      <ul className='flex place-items-center mx-8 flex-grow'>
        <li className='px-6 py-6'>
          <Link to="/" className='hover:border-neutral-800 pb-1 border-b-[3px] border-transparent transition-colors duration-100'>Shop</Link>
        </li>
        <li className='px-6 py-6'>
          <Link to="/sets" className='hover:border-neutral-800 pb-1 border-b-[3px] border-transparent transition-colors duration-100'>Discover</Link>
        </li>
        <li className='px-6 py-6'>
          <Link to="/contact" className='hover:border-neutral-800 pb-1 border-b-[3px] border-transparent transition-colors duration-100'>Help</Link>
        </li>
      </ul>

      <ul className='flex place-items-center space-x-6'>
        <li>
          <div className='rounded-full bg-white flex place-items-center justify-center p-3'>
            <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" aria-hidden="true" data-di-res-id="2d4ebf3d-adc6839b" data-di-rand="1707160052594"><path d="M18 16.615c0 .375-.137.7-.412.973a1.331 1.331 0 01-.973.412 1.28 1.28 0 01-.973-.412l-3.71-3.7a7.41 7.41 0 01-4.317 1.342c-1.03 0-2.017-.2-2.958-.6a7.616 7.616 0 01-2.434-1.623 7.605 7.605 0 01-1.622-2.433A7.472 7.472 0 010 7.616c0-1.032.2-2.018.6-2.96a7.65 7.65 0 011.623-2.433A7.616 7.616 0 014.657.601 7.49 7.49 0 017.615 0c1.032 0 2.018.2 2.959.601.94.4 1.752.941 2.434 1.622a7.624 7.624 0 011.622 2.434c.4.941.601 1.927.601 2.959a7.403 7.403 0 01-1.342 4.316l3.71 3.71c.267.266.401.592.401.973m-5.539-9c0-1.334-.474-2.475-1.423-3.423C10.09 3.244 8.95 2.77 7.615 2.77c-1.333 0-2.475.474-3.423 1.422C3.243 5.14 2.77 6.28 2.77 7.616c0 1.334.474 2.475 1.423 3.423.948.949 2.09 1.422 3.423 1.422 1.335 0 2.475-.473 3.423-1.422.95-.948 1.423-2.09 1.423-3.423" fill="currentColor" fillRule="evenodd"></path></svg>
          </div>
        </li>

        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className='h-4' viewBox="0 0 20 18" aria-hidden="true" data-di-rand="1707160262610" data-di-res-id="b4b13e60-f55e1320"><path d="M16.84 8.417L10 15.204 3.16 8.417A3.67 3.67 0 012 5.739C2 3.677 3.71 2 5.815 2a3.82 3.82 0 012.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0114.186 2C16.289 2 18 3.677 18 5.739a3.673 3.673 0 01-1.16 2.678M9.986 18l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 001.78-4.126C20 2.569 17.398 0 14.187 0A5.829 5.829 0 0010 1.762 5.827 5.827 0 005.815 0C2.604 0 0 2.569 0 5.739a5.68 5.68 0 001.782 4.126" fill="currentColor" fillRule="evenodd"></path></svg>
        </li>

        <li className='flex place-items-center space-x-1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" aria-hidden="true" data-di-rand="1707160262610" data-di-res-id="b4b13e60-64946d43"><g fill="currentColor" fillRule="evenodd"><path d="M4 3.512v5.804c0 .377.349.684.779.684.43 0 .779-.307.779-.684V3.512C5.558 2.33 6.653 1.368 8 1.368c1.347 0 2.442.962 2.442 2.144v5.804c0 .377.35.684.78.684.43 0 .778-.307.778-.684V3.512C12 1.575 10.206 0 8 0S4 1.575 4 3.512z"></path><path d="M2.46 6.33c-.269 0-.489.194-.5.441L1.435 18.19a.436.436 0 00.131.332.52.52 0 00.348.149h12.151c.276 0 .501-.207.501-.462l-.525-11.436c-.011-.248-.23-.442-.5-.442H2.46zM14.448 20l-12.974-.001a1.591 1.591 0 01-1.064-.462 1.357 1.357 0 01-.408-1.03L.56 6.372C.595 5.602 1.277 5 2.11 5h11.78c.835 0 1.516.602 1.551 1.372l.56 12.197c0 .789-.697 1.431-1.553 1.431z"></path></g></svg>
          <h3 className='text-xs'>(0)</h3>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;