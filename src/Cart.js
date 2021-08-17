import { useContext } from "react";

import Navbar from "./components/Navbar";

import { DataContext } from "./utils/DataProvider";

const Cart = () => {
  const { cart } = useContext(DataContext);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Cart;
