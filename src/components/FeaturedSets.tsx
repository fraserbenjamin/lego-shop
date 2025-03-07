import { Set } from "../types";
import { ProductCard } from "./ProductCard";

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
  {
    name: "Eiffel tower",
    price: 554.99,
    rating: 4,
    image: "https://www.lego.com/cdn/cs/set/assets/blt0e2b04c977a2dc2a/10307.png",
    tag: "exclusive",
  },
  {
    name: "Talking Sorting Hat™",
    price: 89.99,
    image: "https://www.lego.com/cdn/cs/set/assets/blt47c94c595257dd3a/76429.png",
    tag: "new",
  },
];

export const FeaturedSets = () => {
  return (
    <div className="px-16 my-8">
      <h1 className="text-2xl py-3">Featured Sets</h1>

      <div className="flex w-full overflow-x-auto">
        {featuredSets.map((set) => (
          <ProductCard
            key={set.name}
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
