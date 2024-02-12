import eiffelTowerMotionHero from "../assets/eiffelTowerMotionHero.mp4";
import PromoButton from "./PromoButton";

const EiffelTowerHero = () => (
  <div className="w-full relative flex place-items-center bg-neutral-900 h-96 max-h-96 sm:h-auto overflow-hidden">
    <div className="flex flex-col text-white absolute z-10 place-items-start space-y-5 max-w-sm mx-24">
      <h1 className="text-4xl">Ooh la la!</h1>
      <p className="text-lg hidden sm:inline">Bring the iconic Eiffel tower to life with the tallest LEGO® set to date.</p>

      <div className="flex space-x-5">
        <PromoButton label="Shop now" />
        <PromoButton label="Learn more" />
      </div>
    </div>

    <video className="h-full w-full object-cover" loop playsInline autoPlay muted disableRemotePlayback>
      <source src={eiffelTowerMotionHero} type="video/mp4" />
    </video>
  </div>
);

export default EiffelTowerHero;
