export const CheckoutStep3 = () => {
  return (
    <>
      {/* <!-- BEING CHECKOUT STEP Three -->  */}
      <div className='checkout-purchase checkout-form'>
        <h4>
          BeShop thanks
          <br />
          you for your purchase!
        </h4>
        <p>
          Consequat minim ipsum aliquip quis ullamco aliquip consequat aliquip
          sit eu enim duis qui. Velit minim tempor non aliquip officia cillum.
          Irure Lorem do enim sint in commodo. Ea ea nostrud labore mollit nisi.
          Cupidatat esse minim mollit qui velit esse voluptate. Excepteur ad
          officia dolore amet magna ipsum dolor incididunt excepteur ad non. Ea
          ea qui irure excepteur est consectetur amet est exercitation in.
        </p>
        <ul className='checkout-purchase__list'>
          <li>
            <span>Order number</span>B-125724_75
          </li>
          <li>
            <span>Order status</span>Awaiting payment
          </li>
          <li>
            <span>Reserved for</span>22.09.2020
          </li>
          <li>
            <span>Expected loading date</span>20.09.2020
          </li>
        </ul>
        <a href='#' className='checkout-purchase__link'>
          print a document -
        </a>
      </div>
      {/* <!-- CHECKOUT STEP TWO EOF -->  */}
    </>
  );
};
