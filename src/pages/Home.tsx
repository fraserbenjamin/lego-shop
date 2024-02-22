import CallToAction from "../components/CallToAction";
import FeaturedSets from "../components/FeaturedSets";
import GiftWithPurchase from "../components/GiftWithPurchase";
import ReadAllAboutIt from "../components/ReadAllAboutIt";
import TopPicks from "../components/TopPicks";
import WelcomeMessage from "../components/WelcomeMessage";
import IconsBirdHero from "../components/IconsBirdHero";
import DuneHero from "../components/DuneHero";

const Home = () => {
  return (
    <>
      <DuneHero />

      <FeaturedSets />

      <TopPicks />

      <WelcomeMessage />

      <GiftWithPurchase />

      <ReadAllAboutIt />

      <CallToAction />

      <IconsBirdHero />
    </>
  );
};

export default Home;
