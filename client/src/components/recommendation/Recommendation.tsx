import { product } from "../../data/dummyProduct";
import ProductCard from "../productCard/ProductCard";
import "./Recommendation.scss";

const Recommendation = () => {
  return (
    <div className="recommendation">
      <div className="container rounded-md">
        <div className="header bg-[#02A9F7]">
          <img src="/Recommendation.svg" alt="" />
          Recommendation For You
        </div>
        <div className="content">
          {product.map((products) => (
            <ProductCard
              key={products.id}
              images={products.images ?? []}
              name={products.name}
              price={products.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
