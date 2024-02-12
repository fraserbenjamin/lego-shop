import { FC } from "react";

interface PromoButtonProps {
  label: string;
}

const PromoButton: FC<PromoButtonProps> = ({ label }) => (
  <button className='bg-white text-neutral-900 font-bold rounded flex py-3 px-5 space-x-3 place-items-center'>
    <span>{label}</span>
    <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path></svg>
  </button>
);

export default PromoButton;