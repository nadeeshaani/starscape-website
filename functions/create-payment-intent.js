//.netlify/netlify-server-functions/hello
require("dotenv").config();

const stripe = require("stripe")(
  `${process.env.VITE_REACT_APP_STRIPE_SECRET_KEY}`
);
console.log(process.env.VITE_REACT_APP_STRIPE_SECRET_KEY);
exports.handler = async (event, context) => {
  if (event.body) {
    const { cart, totalPrice, shipping_fee } = JSON.parse(event.body);
    const calculateOrderAmount = () => {
      return +shipping_fee + +totalPrice;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    }
  }

  return {
    statusCode: 200,
    body: "argok ya rab",
  };
  // try {
  //   console.log(
  //     "===================================================================================================================="
  //   );

  //   // const { cart, totalPrice, shipping_fee } = await event.body.json();
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({ cart, totalPrice }),
  //   };
  // } catch (error) {
  //   console.log(error.message);

  //   return {
  //     statusCode: 400,
  //     body: JSON.stringify({ error }),
  //   };
  // }
};
