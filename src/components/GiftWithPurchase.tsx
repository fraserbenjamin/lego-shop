import gwpJPG from '../assets/gwp.jpg';
import PromoButton from './PromoButton';

const GiftWithPurchase = () => (
  <div className='relative bg-black'>
    <img src={gwpJPG} alt="Gift with purchase" className="h-44 object-cover" />

    <div className='flex flex-col absolute right-24 top-0 justify-center place-items-end h-full space-y-3'>
      <span className='text-white text-xl text-right'>A fan-inspired gift with LEGO®<br /> purchases over £120*</span>

      <PromoButton label="Shop Now" />
    </div>
  </div>
);

export default GiftWithPurchase;
