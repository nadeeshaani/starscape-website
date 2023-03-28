import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  loadStripe,
  // PaymentElement,
  // LinkAuthenticationElement,
  useStripe,
  useElements,
  CardElement,
  useUserContext,
  useCartContext,
  formatPrice,
  Elements,
} from "./index";
import { styled } from "@mui/system";
const promise = loadStripe(
  `${import.meta.env.VITE_REACT_APP_STRIPE_PUBLIC_KEY}`
);

//form
const CheckOutForm = ({ isFilled, setAddrErr }) => {
  const { myUser } = useUserContext();
  const { cart, shipping_fee, totalPrice, clearCart } = useCartContext();
  const navigate = useNavigate();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const createPaymentIntent = async () => {
    try {
      const body = JSON.stringify({ cart, totalPrice, shipping_fee });

      const { data } = await axios.post(
        "/.netlify/functions/create-payment-intent",

        body,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      setClientSecret(data.clientSecret);
    } catch (error) {
      // console.log(error.response)
      console.error(error.message.response);
    }
  };
  ////////////////////////////////////////////////////////////////////

  useEffect(() => {
    createPaymentIntent();
    // eslint-disable-next-line
  }, []);

  const handleChange = async (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    if (isFilled) {
      setAddrErr("");
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (payload.error) {
        setError(`payment failed ${payload.error.message}`);
        setProcessing(false);
      } else {
        setError(null);
        setProcessing(false);
        setSucceeded(true);
        clearCart();
        navigate("/placed-order");
      }
    } else {
      setProcessing(false);
      setSucceeded(false);
      setAddrErr("enter all required fileds");
    }
  };
  const cardStyle = {
    // layout: "tabs",
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  //
  return (
    <Wrapper>
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        // className={isAddress ? "payment-show" : "payment-hide"}
      >
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        <button
          className="pay-stripe-checkout-btn"
          disabled={processing || disabled || succeeded}
          id="submit"
        >
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error" id="card-error" role="alert">
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
        <p className={succeeded ? "result-message" : "result-message hidden"}>
          Payment succeeded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            Stripe dashboard.
          </a>
          Refresh the page to pay again.
        </p>
      </form>
      {succeeded ? (
        <article>
          <h4>Thank you</h4>
          <h4>Your payment was successful!</h4>
          <h4>Redirecting to home page shortly</h4>
        </article>
      ) : (
        <article style={{ paddingTop: "20px" }}>
          <p>Test Card Number: 4242 4242 4242 4242</p>
        </article>
      )}
    </Wrapper>
  );
};
const StripeCheckOut = ({ isFilled, setAddrErr }) => {
  const appearance = {
    theme: "stripe",
  };
  const options = {
    // clientSecret,
    appearance,
  };
  return (
    <Elements stripe={promise} options={options}>
      {/* {isAddress && <CheckOutForm isAddress={isAddress} />} */}
      <CheckOutForm setAddrErr={setAddrErr} isFilled={isFilled} />
    </Elements>
  );
};

const Wrapper = styled("section")`
  #payment-form {
    width: 85%;
    /* align-self: center; */
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
    animation: payment-card-show;
    animation-duration: 0.8s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .result-message {
    line-height: 22px;
    font-size: 16px;
  }

  .result-message a {
    color: var(--txt-clr-2);
    font-weight: 600;
    text-decoration: none;
  }
  .hidden {
    display: none;
  }
  #card-error {
    color: var(--txt-alert);
    line-height: 20px;
    margin-top: 12px;
  }
  #card-element {
    border-radius: 4px 4px 0 0;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  #payment-request-button {
    margin-bottom: 32px;
  }
  /* Buttons and links */
  .pay-stripe-checkout-btn {
    background: var(--txt-clr-2);
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }
  .pay-stripe-checkout-btn:hover {
    filter: contrast(115%);
  }
  .pay-stripe-checkout-btn:disabled {
    opacity: 0.5;
    cursor: default;
  }
  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }
  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .spinner:before,
  .spinner:after {
    position: absolute;
    content: "";
  }
  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: var(--txt-clr-2);
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }
  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: var(--txt-clr-2);
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }
  @keyframes payment-card-show {
    from {
      transform: translateY(-20%);
    }

    to {
      transform: translateY(0%);
    }
  }
  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media (max-width: 900px) {
    #payment-form {
      width: 100%;
    }
  }

  @media (max-width: 566px) {
    #payment-form {
      padding: 40px 30px;
    }
  }

  @media (max-width: 400px) {
    #payment-form {
      padding: 25px 10px;
    }
  }
`;
export default StripeCheckOut;
