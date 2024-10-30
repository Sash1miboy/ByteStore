import { Product } from "../../data/ProductInterface";
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
  const formatPrice = (price: number): string => {
    return `Rp${price.toLocaleString("id-ID")}`;
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
          {selectedOption ? `${formatPrice(selectedOption.price)}` : "-"}
        </span>
      </td>
      <td>
        <button>Buy</button>
      </td>
    </tr>
  );
};

export default PartSelection;
