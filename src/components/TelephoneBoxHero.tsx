import telephoneBoxMotionHero from "../assets/telephone-box-motion-hero.mp4";

const TelephoneBoxHero = () => {

  return (
    <div className="w-full relative flex place-items-center bg-neutral-900 min-h-64">
      <div className="flex flex-col text-white absolute z-10 place-items-start space-y-5 max-w-lg mx-24">
        <h1 className="text-5xl">London calling</h1>
        <p className="text-lg">Recreate a British cultural icon with the new Red London Telephone Box.</p>

        <button>Shop Now</button>
      </div>

      <video className="w-full" data-test="video" loop playsInline autoPlay muted>
        <source src={telephoneBoxMotionHero} type="video/mp4" />
      </video>
    </div>
  )
}

export default TelephoneBoxHero;
