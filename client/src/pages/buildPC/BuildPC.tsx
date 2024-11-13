import "./BuildPC.scss";
import { products } from "../../data/dummyProduct";
import { Product } from "../../data/ProductInterface";
import { useState } from "react";
import PartSelection from "../../components/partSelection/PartSelection";

type PartType =
  | "CPU"
  | "Motherboard"
  | "GPU"
  | "Memory"
  | "Storage"
  | "PSU"
  | "Case"
  | "CPU Cooler"
  | "PC Fans";

interface SelectedParts {
  [key: string]: {
    product: Product | null;
    quantity: number;
  };
}

const BuildPC = () => {
  const [isCompatible, setIsCompatible] = useState(true);
  const [totalPower, setTotalPower] = useState(0);

  const [selectedParts, setSelectedParts] = useState<SelectedParts>({
    CPU: { product: null, quantity: 0 },
    Motherboard: { product: null, quantity: 0 },
    GPU: { product: null, quantity: 0 },
    Memory: { product: null, quantity: 0 },
    Storage: { product: null, quantity: 0 },
    PSU: { product: null, quantity: 0 },
    Case: { product: null, quantity: 0 },
    "CPU Cooler": { product: null, quantity: 0 },
    "PC Fans": { product: null, quantity: 0 },
  });

  const getProductOptions = (category: PartType): Product[] =>
    products.filter((product) => product.category === category);

  const handlePartChange = (partName: PartType, productId: number) => {
    const options = getProductOptions(partName);
    const product = options.find((option) => option.id === productId) || null;

    setSelectedParts((prevState) => {
      const newSelectedParts = {
        ...prevState,
        [partName]: { product, quantity: product ? 1 : 0 },
      };

      const checkCompatibility = () => {
        const selectedCPU = newSelectedParts.CPU.product;
        const selectedMotherboard = newSelectedParts.Motherboard.product;
        const selectedMemory = newSelectedParts.Memory.product;
        let compatible = true;

        if (selectedCPU && selectedMotherboard) {
          if (selectedCPU.socketType !== selectedMotherboard.socketType) {
            compatible = false;
          }
          if (
            selectedMotherboard.memoryType &&
            selectedMemory &&
            selectedMotherboard.memoryType !== selectedMemory.memoryType
          ) {
            compatible = false;
          }
        }

        return compatible;
      };

      setIsCompatible(checkCompatibility());

      const totalEstPower = Object.values(newSelectedParts).reduce(
        (total, part) => {
          if (part.product && part.quantity > 0) {
            return total + (part.product.estPower || 0) * part.quantity;
          }
          return total;
        },
        0
      );

      setTotalPower(totalEstPower);

      return newSelectedParts;
    });
  };

  const handleQuantityChange = (partName: PartType, quantity: number) => {
    setSelectedParts((prevState) => {
      const newQuantity = Math.max(quantity, 1);
      const newSelectedParts = {
        ...prevState,
        [partName]: {
          ...prevState[partName],
          quantity: newQuantity,
        },
      };

      const totalEstPower = Object.values(newSelectedParts).reduce(
        (total, part) => {
          if (part.product && part.quantity > 0) {
            return total + (part.product.estPower || 0) * part.quantity;
          }
          return total;
        },
        0
      );

      setTotalPower(totalEstPower);
      return newSelectedParts;
    });
  };

  const calculateTotalPrice = (): number => {
    return Object.values(selectedParts).reduce((total, part) => {
      if (part.product) {
        return total + part.product.price * part.quantity;
      }
      return total;
    }, 0);
  };

  const formatPrice = (price: number): string => {
    return `Rp${price.toLocaleString("id-ID")}`;
  };

  return (
    <div className="buildPC">
      <div className="container">
        <div className="header">
          <div
            className={`compatible text-white w-[70%] px-8 py-2 rounded-md ${
              isCompatible ? "bg-[#00B16A]" : "bg-red-500"
            }`}
          >
            <h1 className="status font-bold">Compatibility:</h1>
            <span className="extra">
              {isCompatible
                ? "All parts are compatible"
                : "Incompatible parts selected"}
            </span>
          </div>

          <div className="powerEST bg-[#2B85C1] text-white w-[28%] px-8 py-2 rounded-md">
            <h1 className="powerStatus font-bold">Power Estimation:</h1>
            <span className="calcPower font-bold">{totalPower} W</span>
          </div>
        </div>
        <h1 className="buildTitle">Choose Your Build Parts</h1>
        <div className="chooseParts bg-white rounded-md">
          <table className="buildParts">
            <tr className="headLine">
              <th>Parts</th>
              <th>Options</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
            {Object.keys(selectedParts).map((partName) => (
              <PartSelection
                key={partName}
                partName={partName as PartType}
                options={getProductOptions(partName as PartType)}
                selectedOption={selectedParts[partName].product}
                quantity={selectedParts[partName].quantity}
                onSelectChange={(e) =>
                  handlePartChange(partName as PartType, Number(e.target.value))
                }
                onQuantityChange={(e) =>
                  handleQuantityChange(
                    partName as PartType,
                    Number(e.target.value)
                  )
                }
              />
            ))}
          </table>
          <div className="totalParts">
            <span>Total All Parts: {formatPrice(calculateTotalPrice())}</span>
            <button className="buyAllBTN">Buy All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildPC;
