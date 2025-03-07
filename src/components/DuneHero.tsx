import iconsBirdHeroJPG from "../assets/duneHero.jpeg";
import { PromoButton } from "./PromoButton";

export const DuneHero = () => (
  <div className="w-full relative flex place-items-center bg-neutral-900 h-96 max-h-96 sm:h-auto overflow-hidden">
    <div className="flex flex-col text-neutral-800 absolute z-10 place-items-start space-y-5 max-w-sm mx-24">
      <h1 className="text-4xl">Recreate an epic aircraft from Dune</h1>
      <p className="text-lg hidden sm:inline">New LEGO® Icons Dune Atreides Royal Ornithopter set is a thrill for fans.</p>

      <div className="flex space-x-5">
        <PromoButton label="Shop Now" nightMode />
        <PromoButton label="Learn More" nightMode />
      </div>
    </div>

    <img src={iconsBirdHeroJPG} alt="Star Wars" className="h-full w-full object-cover" />
  </div >
);
