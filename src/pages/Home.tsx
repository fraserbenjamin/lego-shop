import FeaturedSets from "../components/FeaturedSets";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Placeholder from "../components/Placeholder";
import PromoBar from "../components/PromoBar";
import StarWarsHero from "../components/StarWarsHero";

const Home = () => {
  return (
    <>
      <PromoBar />
      <NavBar />
      <StarWarsHero />

      <FeaturedSets />

      <Footer />
    </>
  );
};

export default Home;
