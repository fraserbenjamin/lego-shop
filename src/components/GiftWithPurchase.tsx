import gwpJPG from '../assets/gwp.jpg';

const GiftWithPurchase = () => (
  <div className='relative bg-black'>
    <img src={gwpJPG} alt="Gift with purchase" className="h-44 object-cover" />

    <div className='flex flex-col absolute right-24 top-0 justify-center place-items-end h-full space-y-3'>
      <span className='text-white text-xl text-right'>A fan-inspired gift with LEGO®<br /> purchases over £120*</span>

      <button className='bg-white font-bold rounded flex py-3 px-5 space-x-3 place-items-center'>
        <span>Shop now</span>
        <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path></svg>
      </button>
    </div>
  </div>
);

export default GiftWithPurchase;
