import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PopUpPayment.scss";
import { Spinner } from "flowbite-react";

const PopUpPayment = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const spinnerTimer = setTimeout(() => {
      setIsLoading(false);

      const redirectTimer = setTimeout(() => {
        navigate("/");
      }, 2000);

      return () => clearTimeout(redirectTimer);
    }, 3000);

    return () => clearTimeout(spinnerTimer);
  }, [navigate]);

  return (
    <div className="popUpPayment">
      <div className="container ">
        {isLoading ? (
          <>
            <Spinner size="xl" />
            <span>Please Wait</span>
          </>
        ) : (
          <>
            <img src="/check.svg" alt="Success" className="checkmark" />
            <span>Payment Successful!</span>
          </>
        )}
      </div>
    </div>
  );
};

export default PopUpPayment;
