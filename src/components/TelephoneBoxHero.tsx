import telephoneBoxMotionHero from "../assets/telephone-box-motion-hero.mp4";
import { PromoButton } from "./PromoButton";

export const TelephoneBoxHero = () => {
  return (
    <div className="w-full relative flex place-items-center bg-neutral-900 h-96 max-h-96 sm:h-auto overflow-hidden">
      <div className="flex flex-col text-white absolute z-10 place-items-start space-y-5 max-w-lg mx-24">
        <h1 className="text-5xl">London calling</h1>
        <p className="text-lg hidden sm:inline">Recreate a British cultural icon with the new Red London Telephone Box.</p>

        <div className="flex space-x-5">
          <PromoButton label="Shop now" />
          <PromoButton label="Learn more" />
        </div>
      </div>

      <video className="h-full w-full object-cover" loop playsInline autoPlay muted disableRemotePlayback>
        <source src={telephoneBoxMotionHero} type="video/mp4" />
      </video>
    </div >
  )
}
