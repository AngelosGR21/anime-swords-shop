import { createContext, useState } from "react";

import data from "./data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  //Getting unique values for each sword title
  const allTitles = ["All", ...new Set(data.map((sword) => sword.animeTitle))];

  const [titles, setTitles] = useState(allTitles);
  return (
    <DataContext.Provider
      value={{
        data,
        cart,
        setCart,
        total,
        setTotal,
        cartItems,
        setCartItems,
        titles,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
