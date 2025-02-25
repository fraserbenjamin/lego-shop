import { FC } from "react";

interface PromoButtonProps {
  label: string;
  nightMode?: boolean;
}

const PromoButton: FC<PromoButtonProps> = ({ label, nightMode = false }) => (
  <button className={`font-bold rounded-sm flex py-3 px-5 space-x-3 place-items-center ${!nightMode ? "bg-white text-neutral-900" : "bg-neutral-900 text-white"}`}>
    <span>{label}</span>
    <svg width="12" height="24" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path></svg>
  </button >
);

export default PromoButton;