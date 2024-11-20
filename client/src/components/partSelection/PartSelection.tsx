import React from "react";
import { Product } from "../../data/ProductInterface";
import { useNavigate } from "react-router-dom";
import "./PartSelection.scss";

interface PartSelectionProps {
  partName: string;
  options: Product[];
  selectedOption: Product | null;
  quantity: number;
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onQuantityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PartSelection: React.FC<PartSelectionProps> = ({
  partName,
  options,
  selectedOption,
  quantity,
  onSelectChange,
  onQuantityChange,
}) => {
  const navigate = useNavigate();
  const formatPrice = (price: number): string => {
    return `Rp${price.toLocaleString("id-ID")}`;
  };

  const totalPrice = selectedOption ? selectedOption.price * quantity : 0;

  const handleBuy = () => {
    if (selectedOption && quantity > 0) {
      navigate("/payment", { state: { price: totalPrice } });
    }
  };

  return (
    <tr className="partLine">
      <td>
        <span>{partName}:</span>
      </td>
      <td>
        <select name="" onChange={onSelectChange}>
          <option value="">Choose your {partName}...</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </td>
      <td>
        <input
          type="number"
          value={quantity}
          min={1}
          onChange={onQuantityChange}
          disabled={!selectedOption}
        />
      </td>
      <td>
        <span className="showPrice">
          {selectedOption ? `${formatPrice(totalPrice)}` : "-"}
        </span>
      </td>
      <td>
        <button
          className={`${
            !selectedOption || quantity === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#02a9f7] hover:bg-[#0291d7]"
          } text-white`}
          onClick={handleBuy}
          disabled={!selectedOption || quantity === 0}
        >
          Buy
        </button>
      </td>
    </tr>
  );
};

export default PartSelection;
