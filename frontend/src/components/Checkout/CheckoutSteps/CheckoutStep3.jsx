export const CheckoutStep3 = () => {
  return (
    <>
      {/* <!-- BEING CHECKOUT STEP Three -->  */}
      <div className='checkout-purchase checkout-form'>
        <h4>
          Starscape thanks
          <br />
          you for your purchase!
        </h4>
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
