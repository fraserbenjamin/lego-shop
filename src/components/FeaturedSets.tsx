import { Set } from "../types";
import ProductCard from "./ProductCard";

const featuredSets: Set[] = [
  {
    name: "Lion Knights' Castle",
    price: 344.99,
    rating: 5,
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt0254ea3dce736ea0/10305.png",
    tag: "exclusive",
  },
  {
    name: "The Orient Express Train",
    price: 259.99,
    rating: 4,
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt4c79e331f0151811/21344.png",
    tag: "exclusive",
  },
  {
    name: "Polaroid OneStep SX-70 Camera",
    price: 69.99,
    rating: 4,
    image:
      "https://www.lego.com/cdn/cs/set/assets/bltb0d4865e1765d9bc/21345.png",
    tag: "new",
  },
  {
    name: "Natural History Museum",
    price: 259.99,
    rating: 4,
    image:
      "https://www.lego.com/cdn/cs/set/assets/blt08ba1f2bb5e8f2fb/10326.png",
    tag: "exclusive",
  },
];

const FeaturedSets = () => {
  return (
    <div>
      <h1 className="text-2xl p-3">Featured Sets</h1>

      <div className="flex w-full overflow-x-auto justify-center">
        {featuredSets.map((set) => (
          <ProductCard
            name={set.name}
            price={set.price}
            rating={set.rating}
            image={set.image}
            tag={set.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSets;
