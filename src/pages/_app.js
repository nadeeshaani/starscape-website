import { createContext, useState } from 'react';
import '../styles/styles.scss';

export const CartContext = createContext();
const MyApp = ({ Component, pageProps }) => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Component {...pageProps} />
    </CartContext.Provider>
  );
};

export default MyApp;
