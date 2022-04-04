import React, { useContext } from "react";
import { Context } from "../context";

function Cart() {
  const photos = useContext(Context);
  return (
    <>
      <h1>Cart Page</h1>
    </>
  );
}

export default Cart;
