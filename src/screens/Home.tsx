import FeaturedSets from "../components/FeaturedSets";
import GiftWithPurchase from "../components/GiftWithPurchase";
import ReadAllAboutIt from "../components/ReadAllAboutIt";
import TelephoneBoxHero from "../components/TelephoneBoxHero";
import TopPicks from "../components/TopPicks";
import WelcomeMessage from "../components/WelcomeMessage";

const Home = () => {
  return (
    <>
      <TelephoneBoxHero />

      <FeaturedSets />

      <GiftWithPurchase />

      <TopPicks />

      <WelcomeMessage />

      <ReadAllAboutIt />
    </>
  );
};

export default Home;
