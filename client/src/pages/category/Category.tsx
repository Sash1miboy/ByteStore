import "./Category.scss";
import { products } from "../../data/dummyProduct";
import ProductCard from "../../components/productCard/ProductCard";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryName } = useParams();

  const formattedCategory = categoryName
    ?.split("-")
    .map((word) => word.toUpperCase());

  const filteredProducts = products.filter((product) => {
    if (categoryName?.toLowerCase() === "cooling") {
      return (
        product.category === "CPU Cooler" || product.category === "PC Fans"
      );
    }
    return product.category.toLowerCase() === categoryName?.toLowerCase();
  });

  return (
    <div className="category">
      <div className="container">
        <div className="categoryHeader">
          <h1>Category: "{formattedCategory}"</h1>
        </div>
        <hr className="categoryLine" />
        <div className="categoryContent">
          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <h2 className="text-red-600">
                No Products Found In This Category!
              </h2>
              <span>Please check back later.</span>
            </div>
          ) : (
            <div className="there-products">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  images={product.images}
                  name={product.name}
                  price={product.price}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
