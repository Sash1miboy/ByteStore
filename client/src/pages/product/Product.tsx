import "./Product.scss";
import { product } from "../../data/dummyProduct";
import { Carousel as FlowbiteCarousel } from "flowbite-react";
import { useState } from "react";

const Product = () => {
  const startProduct = product[0];

  const [soldCount] = useState(Math.floor(Math.random() * 500) + 1);
  const [rating] = useState((Math.random() * 1 + 4).toFixed(1));
  const [ratingCount] = useState(Math.floor(Math.random() * 100) + 1);

  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="product">
      <div className="container">
        <div className="preview">
          <FlowbiteCarousel
            className="flowbiteCarousel h-[35rem] w-[35rem]"
            slide={false}
            indicators={false}
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
            <button className="buyButton bg-[#00B16A] hover:bg-[#009B5D] text-white">
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
