import "./ProductCard.scss";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id?: string;
  image: string;
  name: string;
  price: string;
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

const formatPrice = (price: string): string => {
  const numericPrice = parseInt(price, 10);
  return `Rp${numericPrice.toLocaleString("id-ID")}`;
};

const ProductCard: React.FC<ProductCardProps> = ({
  // id,
  image,
  name,
  price,
}) => {
  return (
    <Link to="#" className="productCard">
      <div className="containerCard rounded-md">
        <img src={image} alt={name} className="productImage" />
        <div className="productInfo">
          <span className="productName">{addDot(name, 30)}</span>
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
