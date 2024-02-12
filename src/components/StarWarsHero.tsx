import starWarsHeroJPG from "../assets/starWarsHero.jpeg";
import PromoButton from "./PromoButton";

const StarWarsHero = () => (
  <div className="w-full relative flex place-items-center bg-neutral-900 min-h-64 h-64 sm:h-auto">
    <div className="flex flex-col text-white absolute z-10 place-items-start space-y-5 max-w-sm mx-24">
      <h1 className="text-4xl">New LEGO® Star Wars™ X-Wing Starfighter™</h1>
      <p className="text-lg hidden sm:inline">Insiders Early Access is happening now! Not an Insider? Join today!</p>

      <div className="flex space-x-5">
        <PromoButton label="Learn more" />
        <PromoButton label="Become an Insider" />
      </div>
    </div>

    <img src={starWarsHeroJPG} alt="Star Wars" className="h-full w-full object-cover" />
  </div >
);

export default StarWarsHero;
