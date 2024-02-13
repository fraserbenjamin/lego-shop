import CallToAction from "../components/CallToAction";
import FeaturedSets from "../components/FeaturedSets";
import GiftWithPurchase from "../components/GiftWithPurchase";
import ReadAllAboutIt from "../components/ReadAllAboutIt";
import TopPicks from "../components/TopPicks";
import WelcomeMessage from "../components/WelcomeMessage";
import TelephoneBoxHero from "../components/TelephoneBoxHero";

const Home = () => {
  return (
    <>
      <TelephoneBoxHero />

      <FeaturedSets />

      <GiftWithPurchase />

      <TopPicks />

      <WelcomeMessage />

      <ReadAllAboutIt />

      <CallToAction />
    </>
  );
};

export default Home;
