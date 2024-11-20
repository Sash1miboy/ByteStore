import { useState } from "react";
import "./Payment.scss";
import { useLocation, Navigate } from "react-router-dom";
import PopUpPayment from "../../components/popupPayment/PopUpPayment";

interface PaymentProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Payment: React.FC<PaymentProps> = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const price = location.state?.price || 0;

  const shipping = 40000;
  const handling = price * 0.02;
  const total = price + shipping + handling;

  if (!price) {
    return <Navigate to="/" />;
  }

  const formatPrice = (price: number): string => {
    return `Rp${price.toLocaleString("id-ID")}`;
  };

  const handlePayment = () => {
    if (selectedMethod) {
      setShowPopup(true);
    }
  };

  return (
    <>
      <div className="payment bg-gray-50">
        <div className="container">
          <div className="paymentMethod bg-white">
            <h1>Payment</h1>
            <hr />
            <div className="method">
              <div className="methodOption">
                <label htmlFor="bca" className="methodLabel">
                  <img src="/BCA KlikPay.svg" alt="BCA" />
                  <span>BCA Virtual Account</span>
                </label>
                <input
                  type="radio"
                  id="bca"
                  name="paymentMethod"
                  value="bca"
                  checked={selectedMethod === "bca"}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                />
              </div>

              <div className="methodOption">
                <label htmlFor="mandiri" className="methodLabel">
                  <img src="/Mandiri E-Cash.svg" alt="Mandiri" />
                  <span>Mandiri Virtual Account</span>
                </label>
                <input
                  type="radio"
                  id="mandiri"
                  name="paymentMethod"
                  value="mandiri"
                  checked={selectedMethod === "mandiri"}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                />
              </div>

              <div className="methodOption">
                <label htmlFor="gopay" className="methodLabel">
                  <img src="/Gopay (Alt).svg" alt="Gopay" />
                  <span>Gopay</span>
                </label>
                <input
                  type="radio"
                  id="gopay"
                  name="paymentMethod"
                  value="gopay"
                  checked={selectedMethod === "gopay"}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                />
              </div>

              <div className="methodOption">
                <label htmlFor="dana" className="methodLabel">
                  <img src="/DANA.svg" alt="DANA" />
                  <span>DANA</span>
                </label>
                <input
                  type="radio"
                  id="dana"
                  name="paymentMethod"
                  value="dana"
                  checked={selectedMethod === "dana"}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                />
              </div>

              <div className="methodOption">
                <label htmlFor="ovo" className="methodLabel">
                  <img src="/OVO (Alt).svg" alt="OVO" />
                  <span>OVO</span>
                </label>
                <input
                  type="radio"
                  id="ovo"
                  name="paymentMethod"
                  value="ovo"
                  checked={selectedMethod === "ovo"}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="paymentDetails bg-white">
            <h1>Summary</h1>
            <hr />
            <div className="details">
              <div className="partPayment">
                <span>Part Price:</span>
                <span>{formatPrice(price)}</span>
              </div>
              <div className="biayaLogistik">
                <span>Biaya Pengiriman:</span>
                <span>{formatPrice(shipping)}</span>
              </div>
              <div className="biayaPenanganan">
                <span>Biaya Penanganan:</span>
                <span>{formatPrice(handling)}</span>
              </div>
            </div>
            <hr />
            <div className="moreInfo">
              <div className="total">
                <span>Total:</span>
                <span>{formatPrice(total)}</span>
              </div>
              <button
                className={`${
                  !selectedMethod
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#00B16A] hover:bg-[#009B5D]"
                } text-white`}
                disabled={!selectedMethod}
                onClick={handlePayment}
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
      {showPopup && <PopUpPayment />}
    </>
  );
};

export default Payment;
