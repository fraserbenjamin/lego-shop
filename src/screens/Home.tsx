import CallToAction from "../components/CallToAction";
import FeaturedSets from "../components/FeaturedSets";
import GiftWithPurchase from "../components/GiftWithPurchase";
import ReadAllAboutIt from "../components/ReadAllAboutIt";
import EiffelTowerHero from "../components/EiffelTowerHero";
import TopPicks from "../components/TopPicks";
import WelcomeMessage from "../components/WelcomeMessage";

const Home = () => {
  return (
    <>
      <EiffelTowerHero />

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
