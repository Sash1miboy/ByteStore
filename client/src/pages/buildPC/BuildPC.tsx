import "./BuildPC.scss";
import { products } from "../../data/dummyProduct";
import { Product } from "../../data/ProductInterface";
import { useState } from "react";

const formatPrice = (price: number): string => {
  return `Rp${price.toLocaleString("id-ID")}`;
};

const BuildPC = () => {
  const [selectedCPU, setSelectedCPU] = useState<Product | null>(null);
  const [cpuQuantity, setCpuQuantity] = useState<number>(0);

  const cpuOptions: Product[] = products.filter(
    (product) => product.category === "CPU"
  );

  const handleCPUChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const productId = Number(event.target.value);
    const product = cpuOptions.find((cpu) => cpu.id === productId) || null;
    setSelectedCPU(product);
    setCpuQuantity(product ? 1 : 0);
  };

  const handleCpuQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Math.max(Number(event.target.value), 1);
    setCpuQuantity(value);
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
            <span className="calcPower font-bold">463W</span>
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
            <tr className="partLine">
              <td>
                <span>CPU:</span>
              </td>
              <td>
                <select name="" id="" onChange={handleCPUChange}>
                  <option value="">Choose your CPU...</option>
                  {cpuOptions.map((cpu) => (
                    <option key={cpu.id} value={cpu.id}>
                      {cpu.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  type="number"
                  value={cpuQuantity}
                  min={1}
                  onChange={handleCpuQuantityChange}
                  disabled={!selectedCPU}
                />
              </td>
              <td>
                <span className="showPrice">
                  {selectedCPU ? `${formatPrice(selectedCPU.price)}` : "-"}
                </span>
              </td>
              <td>
                <button>Buy</button>
              </td>
            </tr>
            <tr className="partLine">
              <td>
                <span>Motherboard:</span>
              </td>
              <td>
                <select name="" id=""></select>
              </td>
              <td>
                <input type="number" name="" id="" />
              </td>
              <td>
                <span className="showPrice"></span>
              </td>
              <td>
                <button>Buy</button>
              </td>
            </tr>
            <tr className="partLine">
              <td>
                <span>CPU Cooler:</span>
              </td>
              <td>
                <select name="" id=""></select>
              </td>
              <td>
                <input type="number" name="" id="" />
              </td>
              <td>
                <span className="showPrice"></span>
              </td>
              <td>
                <button>Buy</button>
              </td>
            </tr>
            <tr className="partLine">
              <td>
                <span>Memory:</span>
              </td>
              <td>
                <select name="" id=""></select>
              </td>
              <td>
                <input type="number" name="" id="" />
              </td>
              <td>
                <span className="showPrice"></span>
              </td>
              <td>
                <button>Buy</button>
              </td>
            </tr>
            <tr className="partLine">
              <td>
                <span>Storage:</span>
              </td>
              <td>
                <select name="" id=""></select>
              </td>
              <td>
                <input type="number" name="" id="" />
              </td>
              <td>
                <span className="showPrice"></span>
              </td>
              <td>
                <button>Buy</button>
              </td>
            </tr>
            <tr className="partLine">
              <td>
                <span>GPU:</span>
              </td>
              <td>
                <select name="" id=""></select>
              </td>
              <td>
                <input type="number" name="" id="" />
              </td>
              <td>
                <span className="showPrice"></span>
              </td>
              <td>
                <button>Buy</button>
              </td>
            </tr>
            <tr className="partLine">
              <td>
                <span>PSU:</span>
              </td>
              <td>
                <select name="" id=""></select>
              </td>
              <td>
                <input type="number" name="" id="" />
              </td>
              <td>
                <span className="showPrice"></span>
              </td>
              <td>
                <button>Buy</button>
              </td>
            </tr>
            <tr className="partLine">
              <td>
                <span>Case:</span>
              </td>
              <td>
                <select name="" id=""></select>
              </td>
              <td>
                <input type="number" name="" id="" />
              </td>
              <td>
                <span className="showPrice"></span>
              </td>
              <td>
                <button>Buy</button>
              </td>
            </tr>
            <tr className="partLine">
              <td>
                <span>PC Fans:</span>
              </td>
              <td>
                <select name="" id=""></select>
              </td>
              <td>
                <input type="number" name="" id="" />
              </td>
              <td>
                <span className="showPrice"></span>
              </td>
              <td>
                <button>Buy</button>
              </td>
            </tr>
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
