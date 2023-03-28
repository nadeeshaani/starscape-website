export const Card = ({ order, index, onCollapse, active }) => {
  const { date, deliveryAddress, amount, status, orderItems } = order;

  return (
    <>
      <div className={`profile-orders__item ${active === index && 'active'}`}>
        <div className='profile-orders__row'>
          <div className='profile-orders__col'>
            <span className='profile-orders__col-mob'>date</span>
            <span className='profile-orders__item-date'>{date}</span>
          </div>
          <div className='profile-orders__col'>
            <span className='profile-orders__col-mob'>Delivery address</span>
            <span className='profile-orders__item-addr'>{deliveryAddress}</span>
          </div>
          <div className='profile-orders__col'>
            <span className='profile-orders__col-mob'>amount</span>
            <span className='profile-orders__item-price'>${amount}</span>
          </div>
          <div className='profile-orders__col'>
            <span className='profile-orders__col-mob'>Status</span>
            <span
              className={`profile-orders__col-${
                status.delivered ? 'delivered' : 'onway'
              }`}
            >
              {status.onWay
                ? 'on it’s way'
                : status.delivered
                ? 'DELIVERED'
                : null}
            </span>
            <span
              onClick={() => onCollapse(index)}
              className='profile-orders__col-btn'
            ></span>
          </div>
        </div>
        <div className='profile-orders__content'>
          <ul>
            {orderItems.map((item, index) => (
              <li key={index}>
                {item.name}
                <span>${item.price}</span>
              </li>
            ))}
            <li>
              Payment Methods:
              <span>Сredit card: **** **** **** 1633</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
