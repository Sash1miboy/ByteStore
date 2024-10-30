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
    setSelectedParts((prevState) => ({
      ...prevState,
      [partName]: { product, quantity: product ? 1 : 0 },
    }));
  };

  const handleQuantityChange = (partName: PartType, quantity: number) => {
    setSelectedParts((prevState) => ({
      ...prevState,
      [partName]: {
        ...prevState[partName],
        quantity: Math.max(quantity, 1),
      },
    }));
  };

  return (
    <div className="buildPC">
      <div className="container">
        <div className="header">
          <div className="compatible bg-[#00B16A] text-white w-[58rem] px-8 py-2 rounded-md">
            <h1 className="status font-bold">Compatible:</h1>
            <span className="extra">
              See the{" "}
              <span className="details underline cursor-pointer">Details</span>
            </span>
          </div>
          <div className="powerEST bg-[#2B85C1] text-white w-[28rem] px-8 py-2 rounded-md">
            <h1 className="powerStatus font-bold">Power Estimation:</h1>
            <span className="calcPower font-bold">-</span>
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
            <span>Total All Parts: </span>
            <button className="buyAllBTN">Buy All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildPC;
