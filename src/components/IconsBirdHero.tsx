import iconsBirdHeroJPG from "../assets/icons-bird.jpeg";
import { PromoButton } from "./PromoButton";

export const IconsBirdHero = () => (
  <div className="w-full relative flex place-items-center bg-neutral-900 h-96 max-h-96 sm:h-auto overflow-hidden">
    <div className="flex flex-col text-white absolute z-10 place-items-start space-y-5 max-w-sm mx-24">
      <h1 className="text-4xl">Create a captivating centrepiece</h1>
      <p className="text-lg hidden sm:inline">New LEGO® Icons Kingfisher Bird set adds a splash of nature to any space.</p>

      <PromoButton label="Shop Now" />
    </div>

    <img src={iconsBirdHeroJPG} alt="Star Wars" className="h-full w-full object-cover" />
  </div >
);
