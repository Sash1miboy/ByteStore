import "./ProductCard.scss";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id?: number;
  images: string[];
  name: string;
  price: number;
}

const addDot = (character: string, num: number): string => {
  if (character.length > num) {
    let newCharacter = character.slice(0, num);
    if (newCharacter.endsWith(" ")) newCharacter = newCharacter.trimEnd();
    return newCharacter + "...";
  } else {
    return character;
  }
};

const formatPrice = (price: number): string => {
  return `Rp${price.toLocaleString("id-ID")}`;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  images,
  name,
  price,
}) => {
  return (
    <Link to={`/product/${id}`} className="productCard">
      <div className="containerCard rounded-md">
        <img src={images[0]} alt={name} className="productImage" />
        <div className="productInfo">
          <span className="productName">{addDot(name, 26)}</span>
          <span className="productPrice">{formatPrice(price)}</span>
        </div>
        <button className="bg-[#00B16A] hover:bg-[#009B5D] text-white">
          Buy
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
