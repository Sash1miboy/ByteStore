import "./Search.scss";
import { products } from "../../data/dummyProduct";
import ProductCard from "../../components/productCard/ProductCard";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const searchQueryLower = searchQuery?.toLowerCase();

  const searchedProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQueryLower || "") ||
      product.category.toLowerCase().includes(searchQueryLower || "") ||
      product.desc.toLowerCase().includes(searchQueryLower || "")
  );

  return (
    <div className="search-page">
      <div className="container">
        <div className="searchHeader">
          <h1>Search Results for: "{searchQuery}"</h1>
        </div>
        <hr className="searchLine" />
        <div className="searchContent">
          {searchedProducts.length === 0 ? (
            <div className="no-products">
              <h2 className="text-red-600">No Products Found!</h2>
              <span>Try searching with different keywords.</span>
            </div>
          ) : (
            <div className="there-products">
              {searchedProducts.map((product) => (
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

export default SearchPage;
