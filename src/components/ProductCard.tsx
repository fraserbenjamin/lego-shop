import { FC } from "react";
import { Tag } from "../types";

interface ProductCardProps {
  name: string;
  price: number;
  rating: number;
  image: string;
  tag?: Tag;
}

const ProductCard: FC<ProductCardProps> = ({
  name,
  price,
  rating,
  image,
  tag,
}) => {
  return (
    <div className="py-3 px-5 min-w-72 max-w-72">
      <div className="p-2 border border-gray mb-3 flex flex-col h-72 justify-center place-items-center relative">
        <img className="object-contain h-full w-full" src={image} alt={name} />

        <div className="absolute bottom-2 left-2">
          {tag ? (
            <div className="bg-brand-yellow text-xs py-1 px-2 flex-shrink">
              {tag === "exclusive" ? "Exclusives" : null}
              {tag === "new" ? "New" : null}
            </div>
          ) : null}
        </div>
      </div>

      <h1 className="font-medium h-14">{name}</h1>

      <div className="flex my-1">
        {Array.from(Array(rating).keys()).map((key: number) => (
          <svg
            key={key}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 49"
            className="w-4 h-4"
          >
            <path
              d="M49.9 18.1c-.6-1.9-2.8-2.2-2.8-2.2l-13.1-2L28 2s-1-2-3-2-3 2-3 2l-5.9 11.9-13.1 2s-2.2.3-2.8 2.2c-.6 1.9 1 3.5 1 3.5l9.6 9.4-2.5 13s-.4 2.2 1.2 3.4c1.6 1.2 3.6.2 3.6.2L25 41.8l12.1 5.9s2 1 3.6-.2 1.2-3.4 1.2-3.4l-2.5-13 9.6-9.4c-.1-.1 1.5-1.7.9-3.6z"
              fill="#FFD500"
            />
          </svg>
        ))}
      </div>

      <p className="text-lg font-bold">£{price}</p>
      <button className="bg-brand-orange rounded px-12 py-3 font-medium w-full mt-2">
        Add to Bag
      </button>
    </div>
  );
};

export default ProductCard;
