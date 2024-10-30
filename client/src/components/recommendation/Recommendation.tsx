import { products } from "../../data/dummyProduct";
import ProductCard from "../productCard/ProductCard";
import "./Recommendation.scss";

const Recommendation = () => {
  const MAX_DISPLAY_ITEMS = 18;
  const displayedProducts = products.slice(0, MAX_DISPLAY_ITEMS);

  return (
    <div className="recommendation">
      <div className="container rounded-md">
        <div className="header bg-[#02A9F7]">
          <img src="/Recommendation.svg" alt="" />
          Recommendation For You
        </div>
        <div className="content">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              images={product.images ?? []}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
