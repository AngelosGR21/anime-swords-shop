import { createContext, useState } from "react";

import data from "./data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  return (
    <DataContext.Provider
      value={{ data, cart, setCart, total, setTotal, cartItems, setCartItems }}
    >
      {children}
    </DataContext.Provider>
  );
};
