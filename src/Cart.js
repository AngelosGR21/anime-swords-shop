import { useContext } from "react";

import Navbar from "./components/Navbar";

import { DataContext } from "./utils/DataProvider";

const Cart = () => {
  const { cart } = useContext(DataContext);
  console.log(cart);
  return (
    <>
      <Navbar />
    </>
  );
};

export default Cart;
