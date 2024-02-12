import CallToAction from "../components/CallToAction";
import FeaturedSets from "../components/FeaturedSets";
import GiftWithPurchase from "../components/GiftWithPurchase";
import ReadAllAboutIt from "../components/ReadAllAboutIt";
import StarWarsHero from "../components/StarWarsHero";
import TopPicks from "../components/TopPicks";
import WelcomeMessage from "../components/WelcomeMessage";

const Home = () => {
  return (
    <>
      <StarWarsHero />

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
