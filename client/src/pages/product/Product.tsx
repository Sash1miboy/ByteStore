import "./Product.scss";
import { products } from "../../data/dummyProduct";
import { Carousel as FlowbiteCarousel } from "flowbite-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id ?? "0", 10);
  const startProduct = products.find((p) => p.id === productId);

  const [soldCount] = useState(Math.floor(Math.random() * 300) + 1);
  const [rating] = useState((Math.random() * 1 + 4).toFixed(1));
  const [ratingCount] = useState(Math.floor(Math.random() * soldCount) + 1);

  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);

  if (!startProduct) return <div>Product not found</div>;

  const customTheme = {
    control: {
      base: "flex items-center justify-center w-10 h-10 text-white transition duration-300 bg-gray-300 rounded-full hover:bg-black",
    },
  };

  return (
    <div className="product bg-gray-50">
      <div className="container">
        <div className="preview">
          <FlowbiteCarousel
            className="flowbiteCarousel"
            slide={false}
            indicators={false}
            theme={customTheme}
          >
            {startProduct.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product image ${index + 1}`}
                className="carouselImage"
              />
            ))}
          </FlowbiteCarousel>
        </div>
        <div className="content">
          <h1 className="productName">{startProduct.name}</h1>
          {soldCount > 0 && (
            <div className="sellInformation">
              <span>Terjual {soldCount}</span>
              <hr />
              <img src="/star.svg" alt="" />
              <span>
                {rating} ({ratingCount} Rating)
              </span>
            </div>
          )}
          <span className="productPrice">{`Rp${startProduct.price.toLocaleString(
            "id-ID"
          )}`}</span>
          <div className="buttonSection">
            <button className="cartButton hover:bg-gray-100">
              Add to Cart
            </button>
            <button className="buyButton bg-[#00B16A] hover:bg-[#009B5D] border-2 border-[#00B16A] hover:border-[#009B5D] text-white">
              Buy
            </button>
          </div>
          <div className={`descContent ${showMore ? "expended" : ""}`}>
            <span>Information</span>
            <p>{startProduct.desc}</p>
          </div>
          <button onClick={toggleShowMore} className="showMoreButton">
            {showMore ? "Less Information" : "More Information"}
            <img src="/down-triangle.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
